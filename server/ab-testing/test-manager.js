class ABTestManager {
    constructor() {
        this.tests = new Map();
    }

    createTest(testId, variants) {
        this.tests.set(testId, {
            variants,
            results: variants.reduce((acc, v) => {
                acc[v.id] = { impressions: 0, conversions: 0 };
                return acc;
            }, {})
        });
    }

    getVariant(testId, userId) {
        const test = this.tests.get(testId);
        if (!test) return null;

        const variantIndex = this.hashUserToVariant(userId, test.variants.length);
        return test.variants[variantIndex];
    }

    trackImpression(testId, variantId) {
        const test = this.tests.get(testId);
        if (test && test.results[variantId]) {
            test.results[variantId].impressions++;
        }
    }

    trackConversion(testId, variantId) {
        const test = this.tests.get(testId);
        if (test && test.results[variantId]) {
            test.results[variantId].conversions++;
        }
    }

    getResults(testId) {
        const test = this.tests.get(testId);
        if (!test) return null;

        return Object.entries(test.results).map(([variantId, stats]) => ({
            variantId,
            impressions: stats.impressions,
            conversions: stats.conversions,
            conversionRate: stats.impressions ? (stats.conversions / stats.impressions) * 100 : 0
        }));
    }

    hashUserToVariant(userId, numVariants) {
        let hash = 0;
        for (let i = 0; i < userId.length; i++) {
            hash = ((hash << 5) - hash) + userId.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash) % numVariants;
    }
}

module.exports = new ABTestManager();