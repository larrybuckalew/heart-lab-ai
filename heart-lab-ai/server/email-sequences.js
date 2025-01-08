const EmailSequences = {
    demoRequest: [
        {
            delay: 0,
            template: 'contactFormConfirmation'
        },
        {
            delay: 48,
            template: 'followUpTemplate'
        }
    ],
    pricing: [
        {
            delay: 0,
            template: 'pricingConfirmation'
        },
        {
            delay: 24,
            template: 'pricingFollowUp'
        }
    ]
};

module.exports = EmailSequences;