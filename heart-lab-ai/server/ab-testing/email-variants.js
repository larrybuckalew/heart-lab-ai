const emailVariants = {
    welcome: {
        testId: 'welcome_email',
        variants: [
            {
                id: 'control',
                subject: 'Welcome to Heart Lab AI',
                template: (data) => `...`
            },
            {
                id: 'variant_1',
                subject: 'Get Started with Voice AI',
                template: (data) => `...`
            },
            {
                id: 'variant_2',
                subject: 'Your Voice AI Journey Begins',
                template: (data) => `...`
            }
        ]
    },
    demo: {
        testId: 'demo_followup',
        variants: [
            {
                id: 'control',
                subject: 'Your Demo Results',
                template: (data) => `...`
            },
            {
                id: 'variant_1',
                subject: 'See How You Compare',
                template: (data) => `...`
            }
        ]
    }
};

module.exports = emailVariants;