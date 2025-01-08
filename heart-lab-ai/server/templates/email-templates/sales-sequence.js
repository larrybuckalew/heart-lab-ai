const salesEmailSequence = {
    discovery: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container { max-width: 600px; margin: auto; font-family: Arial; }
                .header { background: #6366f1; color: white; padding: 20px; }
                .cta-button { background: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Discover Voice AI Solutions</h2>
                <p>Custom solution proposal for ${data.companyName}...</p>
            </div>
        </body>
        </html>
    `,
    proposal: (data) => `...`,
    followUp: (data) => `...`
};