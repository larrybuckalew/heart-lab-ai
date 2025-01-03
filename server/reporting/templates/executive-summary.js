const executiveSummaryTemplate = {
    generate: (data) => `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .report-container { max-width: 800px; margin: auto; font-family: Arial; }
                .metric-card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; }
                .chart-container { height: 300px; margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class="report-container">
                <h1>Executive Summary - ${data.date}</h1>
                <div class="metrics-overview">
                    <h2>Key Metrics</h2>
                    <!-- Dynamic metrics content -->
                </div>
                <div class="charts-section">
                    <!-- Dynamic charts -->
                </div>
            </div>
        </body>
        </html>
    `
}