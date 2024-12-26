const cron = require('node-cron');
const ReportGenerator = require('./report-generator');

class ReportScheduler {
    constructor() {
        this.generator = new ReportGenerator();
        this.setupSchedules();
    }

    setupSchedules() {
        // Daily report at 6 AM
        cron.schedule('0 6 * * *', () => {
            this.generator.generateDailyReport();
        });

        // Weekly report on Mondays at 7 AM
        cron.schedule('0 7 * * 1', () => {
            this.generator.generateWeeklyReport();
        });
    }
}

module.exports = new ReportScheduler();