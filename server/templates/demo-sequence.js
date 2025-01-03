const demoEmailSequence = {
    initial: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; }
                .header { background: #6366f1; color: white; padding: 20px; }
                .button { background: #6366f1; color: white; padding: 10px 20px; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Your Demo is Ready</h1>
                </div>
                <div class="content">
                    <p>Hi ${data.name},</p>
                    <p>Your Voice AI demo is ready to start.</p>
                    <a href="/demo?id=${data.demoId}" class="button">Start Demo</a>
                </div>
            </div>
        </body>
        </html>
    `,
    reminder: (data) => `...`,
    followUp: (data) => `...`
};