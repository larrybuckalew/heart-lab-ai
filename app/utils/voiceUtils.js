export const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      return audioUrl;
    };

    mediaRecorder.start();
    return mediaRecorder;
  } catch (error) {
    console.error('Error accessing microphone:', error);
    return null;
  }
};

export const stopRecording = (mediaRecorder) => {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
};

export const playAudio = (url) => {
  const audio = new Audio(url);
  audio.play();
  return audio;
};