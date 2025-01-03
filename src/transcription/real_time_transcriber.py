from google.cloud import speech_v1p1beta1 as speech
import io

class RealTimeTranscriber:
    def __init__(self):
        # Initialize Google Cloud Speech-to-Text client
        self.client = speech.SpeechClient()
    
    def transcribe_streaming(self, audio_stream):
        # Configure streaming recognition
        streaming_config = speech.StreamingRecognitionConfig(
            config=speech.RecognitionConfig(
                encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
                sample_rate_hertz=16000,
                language_codes=['en-US', 'es-ES', 'fr-FR', 'de-DE', 'zh-CN']
            ),
            interim_results=True
        )
        
        # Yield transcriptions in real-time
        def request_generator():
            yield speech.StreamingRecognizeRequest(streaming_config=streaming_config)
            for content in audio_stream:
                yield speech.StreamingRecognizeRequest(audio_content=content)
        
        responses = self.client.streaming_recognize(request_generator())
        for response in responses:
            if response.results:
                yield response.results[0].alternatives[0].transcript
    
    def save_transcript(self, transcript, filename):
        with open(filename, 'w') as f:
            f.write(transcript)