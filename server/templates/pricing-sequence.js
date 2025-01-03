const pricingEmailSequence = {
    initial: (data) => `<!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .container { max-width: 600px; margin: auto; padding: 20px; }
                .header { background: #6366f1; color: white; padding: 30px; text-align: center; }
                .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
                .plan { border: 1px solid #ddd; padding: 20px; text-align: center; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Your Custom Pricing Plan</h1>
                <p>Based on your requirements, here's your customized plan...</p>
            </div>
        </body>
        </html>`
},
    followUp: (data) => `<!DOCTYPE html>...`}