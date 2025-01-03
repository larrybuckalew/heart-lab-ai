const educationTemplates = {
    onboarding: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container { max-width: 600px; margin: auto; font-family: Arial; }
                .header { background: #6366f1; color: white; padding: 20px; }
                .feature-list { margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Voice AI for Education</h1>
                <div class="feature-list">
                    <h2>Features for Educational Institutions:</h2>
                    <ul>
                        <li>Virtual Learning Assistant</li>
                        <li>Student Support Automation</li>
                        <li>Administrative Task Management</li>
                    </ul>
                </div>
            </div>
        </body>
        </html>
    `,
    caseStudy: (data) => `...`,
    implementation: (data) => `...`
}