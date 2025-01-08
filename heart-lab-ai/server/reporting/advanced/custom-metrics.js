class CustomMetricsReport {
    constructor() {
        this.metrics = new Map();
    }

    async defineCustomMetric(name, calculator) {
        this.metrics.set(name, calculator);
    }

    async generateCustomReport(metricNames) {
        const results = {};
        for (const name of metricNames) {
            const calculator = this.metrics.get(name);
            if (calculator) {
                results[name] = await calculator();
            }
        }
        return results;
    }
}