class FunnelAnalysis {
    constructor() {
        this.funnelSteps = [
            'visit',
            'demo_view',
            'demo_start',
            'demo_complete',
            'pricing_view',
            'contact_form',
            'conversion'
        ];
    }

    async trackStep(userId, step, metadata = {}) {
        const params = {
            TableName: 'user_analytics',
            Item: {
                userId,
                eventTime: new Date().toISOString(),
                eventType: 'funnel_step',
                step,
                metadata
            }
        };
        await dynamoDB.put(params).promise();
    }

    async getFunnelAnalytics(startDate, endDate) {
        const results = {};
        for (const step of this.funnelSteps) {
            results[step] = await this.getStepCount(step, startDate, endDate);
        }
        return this.calculateConversionRates(results);
    }

    async getStepCount(step, startDate, endDate) {
        const params = {
            TableName: 'user_analytics',
            IndexName: 'step-index',
            KeyConditionExpression: 'step = :step AND eventTime BETWEEN :start AND :end',
            ExpressionAttributeValues: {
                ':step': step,
                ':start': startDate.toISOString(),
                ':end': endDate.toISOString()
            }
        };
        const result = await dynamoDB.query(params).promise();
        return result.Items.length;
    }

    calculateConversionRates(stepCounts) {
        const rates = {};
        for (let i = 1; i < this.funnelSteps.length; i++) {
            const currentStep = this.funnelSteps[i];
            const previousStep = this.funnelSteps[i - 1];
            const rate = (stepCounts[currentStep] / stepCounts[previousStep]) * 100;
            rates[`${previousStep}_to_${currentStep}`] = rate.toFixed(2) + '%';
        }
        return {
            stepCounts,
            conversionRates: rates
        };
    }

    async getUserPathAnalysis(userId) {
        const params = {
            TableName: 'user_analytics',
            KeyConditionExpression: 'userId = :userId',
            ExpressionAttributeValues: {
                ':userId': userId
            }
        };
        const result = await dynamoDB.query(params).promise();
        return this.analyzePath(result.Items);
    }

    analyzePath(events) {
        return events
            .sort((a, b) => new Date(a.eventTime) - new Date(b.eventTime))
            .map(event => ({
                step: event.step,
                timestamp: event.eventTime,
                timeSincePrevious: this.getTimeDifference(event, events),
                metadata: event.metadata
            }));
    }

    getTimeDifference(currentEvent, allEvents) {
        const currentIndex = allEvents.indexOf(currentEvent);
        if (currentIndex === 0) return 0;

        const previousEvent = allEvents[currentIndex - 1];
        return (new Date(currentEvent.eventTime) - new Date(previousEvent.eventTime)) / 1000; // in seconds
    }
}

module.exports = new FunnelAnalysis();