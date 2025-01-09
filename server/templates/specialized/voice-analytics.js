const voiceAnalyticsTemplates = {
    accuracyReport: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
                .metric-card { padding: 20px; background: #f8fafc; border-radius: 8px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Voice Analytics Report</h1>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <h3>Word Accuracy</h3>
                        <p>${data.wordAccuracy}%</p>
                    </div>
                    <!-- More metrics -->
                </div>
            </div>
        </body>
        </html>
    `,
    userBehavior: (data) => `...`,
    intentAnalysis: (data) => `...`
}