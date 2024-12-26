const advancedAnalytics = require('./advanced-analytics');
const heatMapping = require('./heat-mapping');
const funnelAnalysis = require('./funnel-analysis');
const emailAnalytics = require('./email-analytics');

class TrackingManager {
    constructor() {
        this.analytics = advancedAnalytics;
        this.heatMap = heatMapping;
        this.funnel = funnelAnalysis;
        this.email = emailAnalytics;
    }

    async trackEvent(userId, event) {
        // Track in user journey
        await this.analytics.trackUserJourney(userId, event);

        // Track in funnel if applicable
        if (event.type === 'funnel_step') {
            await this.funnel.trackStep(userId, event.step, event.metadata);
        }

        // Track click heatmap if applicable
        if (event.type === 'click') {
            this.heatMap.trackClick(event.x, event.y, event.pageUrl);
        }

        // Track email events if applicable
        if (event.type.startsWith('email_')) {
            await this.email.trackEvent(event);
        }
    }

    async getAnalytics(options = {}) {
        const { startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), endDate = new Date() } = options;

        return {
            funnel: await this.funnel.getFunnelAnalytics(startDate, endDate),
            emailMetrics: await this.email.getAggregateMetrics(startDate, endDate),
            heatMaps: this.heatMap.getHeatMap(options.pageUrl),
            userJourneys: await this.analytics.getAggregateMetrics(startDate, endDate)
        };
    }

    async getUserAnalytics(userId) {
        return {
            journey: await this.analytics.getUserJourney(userId),
            funnelPath: await this.funnel.getUserPathAnalysis(userId),
            emailEngagement: await this.email.getUserEngagement(userId)
        };
    }
}

module.exports = new TrackingManager();