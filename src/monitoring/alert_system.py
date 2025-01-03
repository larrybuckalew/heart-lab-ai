import smtplib
from twilio.rest import Client

class AlertSystem:
    def __init__(self, email_config, sms_config):
        # Email configuration
        self.smtp_server = email_config['smtp_server']
        self.smtp_port = email_config['smtp_port']
        self.smtp_username = email_config['username']
        self.smtp_password = email_config['password']
        
        # SMS configuration (Twilio)
        self.twilio_account_sid = sms_config['account_sid']
        self.twilio_auth_token = sms_config['auth_token']
        self.twilio_phone_number = sms_config['phone_number']
        
        self.email_client = None
        self.sms_client = Client(self.twilio_account_sid, self.twilio_auth_token)
    
    def send_email_alert(self, recipient, subject, message):
        try:
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_username, self.smtp_password)
                server.sendmail(self.smtp_username, recipient, f'Subject: {subject}

{message}')
            return True
        except Exception as e:
            print(f'Email alert failed: {e}')
            return False
    
    def send_sms_alert(self, recipient_phone, message):
        try:
            message = self.sms_client.messages.create(
                body=message,
                from_=self.twilio_phone_number,
                to=recipient_phone
            )
            return True
        except Exception as e:
            print(f'SMS alert failed: {e}')
            return False
    
    def trigger_alert(self, alert_type, recipient, message):
        if alert_type == 'email':
            return self.send_email_alert(recipient, 'Heart Lab AI Alert', message)
        elif alert_type == 'sms':
            return self.send_sms_alert(recipient, message)
        else:
            print('Invalid alert type')
            return False