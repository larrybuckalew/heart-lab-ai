class IntentRecognition {
    constructor() {
        this.model = require('../models/intent-model');
    }

    async recognizeIntent(text) {
        const entities = await this.extractEntities(text);
        const intent = await this.model.predict(text, entities);
        return {
            intent,
            confidence: intent.confidence,
            entities
        };
    }
}