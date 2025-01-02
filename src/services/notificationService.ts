import nodemailer from 'nodemailer';
import { WebClient } from '@slack/web-api';
import twilio from 'twilio';
import logger from '../utils/logger';

interface EmailConfig {
  from: string;
  to: string[];
  subject: string;
  text?: string;
  html?: string;
}

interface SlackConfig {
  channel: string;
  text: string;
  blocks?: any[];
}

interface SMSConfig {
  to: string[];
  message: string;
}

export class NotificationService {
  private static instance: NotificationService;
  private emailTransport: nodemailer.Transporter;
  private slackClient: WebClient;
  private twilioClient: twilio.Twilio;

  private constructor() {
    // Initialize email transport
    this.emailTransport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Initialize Slack client
    this.slackClient = new WebClient(process.env.SLACK_TOKEN);

    // Initialize Twilio client
    this.twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );
  }

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async sendEmail(config: EmailConfig) {
    try {
      const result = await this.emailTransport.sendMail({
        from: config.from,
        to: config.to.join(','),
        subject: config.subject,
        text: config.text,
        html: config.html
      });

      logger.info('Email sent successfully', {
        messageId: result.messageId,
        recipients: config.to
      });

      return result;
    } catch (error) {
      logger.error('Email sending failed', { error, config });
      throw error;
    }
  }

  async sendSlackMessage(config: SlackConfig) {
    try {
      const result = await this.slackClient.chat.postMessage({
        channel: config.channel,
        text: config.text,
        blocks: config.blocks
      });

      logger.info('Slack message sent successfully', {
        channel: config.channel,
        ts: result.ts
      });

      return result;
    } catch (error) {
      logger.error('Slack message sending failed', { error, config });
      throw error;
    }
  }

  async sendSMS(config: SMSConfig) {
    try {
      const results = await Promise.all(
        config.to.map(to =>
          this.twilioClient.messages.create({
            to,
            from: process.env.TWILIO_PHONE_NUMBER,
            body: config.message
          })
        )
      );

      logger.info('SMS messages sent successfully', {
        messageIds: results.map(r => r.sid),
        recipients: config.to
      });

      return results;
    } catch (error) {
      logger.error('SMS sending failed', { error, config });
      throw error;
    }
  }

  async sendAutomationNotification(task: string, status: string, details: any) {
    const message = `Automation Task Update:\n${task}\nStatus: ${status}\nDetails: ${JSON.stringify(details)}`;

    // Send to configured notification channels
    await Promise.all([
      this.sendEmail({
        from: process.env.NOTIFICATION_EMAIL!,
        to: [process.env.ADMIN_EMAIL!],
        subject: `Automation Update: ${task}`,
        text: message
      }),
      this.sendSlackMessage({
        channel: process.env.NOTIFICATION_SLACK_CHANNEL!,
        text: message
      })
    ]);
  }
}