const emailTemplates = {
    // Contact Form Confirmation Template
    contactFormConfirmation: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #6366f1; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background: #f9fafb; }
                .footer { text-align: center; padding: 20px; font-size: 0.9em; color: #666; }
                .button { background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Thank You for Contacting Heart Lab AI</h1>
                </div>
                <div class="content">
                    <p>Dear ${data.name},</p>
                    <p>Thank you for reaching out to us. We've received your message and will get back to you shortly.</p>
                    
                    <h3>Your Message Details:</h3>
                    <p><strong>Interest:</strong> ${data.interest}</p>
                    <p><strong>Message:</strong> ${data.message}</p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://heartlabai.com/demo" class="button">Try Our Demo</a>
                    </div>
                    
                    <p>While you wait for our response, you might be interested in:</p>
                    <ul>
                        <li>Exploring our <a href="https://heartlabai.com/services">services</a></li>
                        <li>Checking out our <a href="https://heartlabai.com/pricing">pricing plans</a></li>
                        <li>Learning more <a href="https://heartlabai.com/about">about us</a></li>
                    </ul>
                </div>
                <div class="footer">
                    <p>© 2024 Heart Lab AI. All rights reserved.</p>
                    <p>123 AI Drive, Suite 100, Houston, TX 77002</p>
                </div>
            </div>
        </body>
        </html>
    `,

    // Admin Notification Template
    adminNotification: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #4f46e5; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background: #f9fafb; }
                .data-row { margin: 10px 0; padding: 10px; background: white; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Contact Form Submission</h1>
                </div>
                <div class="content">
                    <div class="data-row">
                        <p><strong>Name:</strong> ${data.name}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
                        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
                        <p><strong>Interest:</strong> ${data.interest}</p>
                    </div>
                    
                    <h3>Message:</h3>
                    <div class="data-row">
                        <p>${data.message}</p>
                    </div>
                    
                    <h3>Additional Information:</h3>
                    <div class="data-row">
                        <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
                        <p><strong>Source:</strong> Website Contact Form</p>
                        <p><strong>UTM Source:</strong> ${data.utm_source || 'Not available'}</p>
                        <p><strong>UTM Medium:</strong> ${data.utm_medium || 'Not available'}</p>
                        <p><strong>UTM Campaign:</strong> ${data.utm_campaign || 'Not available'}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `,

    // Follow-up Template
    followUpTemplate: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #6366f1; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background: #f9fafb; }
                .button { background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Following Up on Your Interest</h1>
                </div>
                <div class="content">
                    <p>Hi ${data.name},</p>
                    <p>I wanted to follow up on your recent inquiry about ${data.interest} at Heart Lab AI.</p>
                    <p>Would you be interested in scheduling a quick call to discuss how we can help you?</p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://heartlabai.com/schedule" class="button">Schedule a Call</a>
                    </div>
                    
                    <p>Best regards,</p>
                    <p>The Heart Lab AI Team</p>
                </div>
            </div>
        </body>
        </html>
    `
};

module.exports = emailTemplates;