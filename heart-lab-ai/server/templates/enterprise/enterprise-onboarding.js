const enterpriseOnboarding = {
    welcome: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container { max-width: 600px; margin: auto; font-family: Arial; }
                .header { background: #6366f1; color: white; padding: 20px; }
                .steps { margin: 20px 0; }
                .step { padding: 10px; border-left: 3px solid #6366f1; margin: 10px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Your Enterprise Voice AI Journey</h1>
                <div class="steps">
                    <div class="step">Step 1: Initial Setup</div>
                    <div class="step">Step 2: Team Training</div>
                    <div class="step">Step 3: Integration</div>
                </div>
            </div>
        </body>
        </html>
    `,
    setupGuide: (data) => `...`,
    teamInvite: (data) => `...`
}