const onboardingEmailSequence = {
    welcome: (data) => `<!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .container { max-width: 600px; margin: auto; }
                .steps { display: grid; gap: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Heart Lab AI!</h1>
                <p>Let's get you started with your Voice AI journey...</p>
            </div>
        </body>
        </html>`
}