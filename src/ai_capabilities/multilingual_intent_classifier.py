import langdetect
from transformers import pipeline

class MultilingualIntentClassifier:
    def __init__(self):
        # Initialize multilingual intent classification models
        self.models = {
            'en': pipeline('text-classification', model='bert-base-multilingual-uncased'),
            'es': pipeline('text-classification', model='dccuchile/bert-base-spanish-wwm-uncased'),
            'fr': pipeline('text-classification', model='camembert-base'),
            'de': pipeline('text-classification', model='bert-base-german-uncased'),
            'zh': pipeline('text-classification', model='bert-base-chinese')
        }
    
    def detect_language(self, text):
        try:
            return langdetect.detect(text)
        except:
            return 'en'  # Default to English
    
    def classify_intent(self, text):
        language = self.detect_language(text)
        model = self.models.get(language, self.models['en'])
        return model(text)[0]
    
    def train(self, training_data):
        # Implement transfer learning across languages
        pass