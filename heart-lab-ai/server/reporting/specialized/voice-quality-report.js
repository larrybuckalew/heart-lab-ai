class VoiceQualityReport {
    async generate(timeframe) {
        const metrics = await this.gatherVoiceMetrics(timeframe);
        return {
            accuracy: {
                wordErrorRate: metrics.wer,
                sentenceErrorRate: metrics.ser,
                intentAccuracy: metrics.intentAccuracy
            },
            performance: {
                responseLatency: metrics.latency,
                processingTime: metrics.processingTime
            },
            recommendations: this.generateOptimizations(metrics)
        };
    }
}