export const generateBotResponse = async (message) => {
  // Mock AI response generation
  const responses = [
    'Thank you for your message. How can I assist you today?',
    'I understand. Could you provide more details?',
    'Let me connect you with our team.',
    'I can help you with that. What specific information do you need?'
  ];

  return responses[Math.floor(Math.random() * responses.length)];
};

export const formatMessage = (message) => {
  return {
    id: Date.now(),
    text: message,
    timestamp: new Date().toISOString(),
    type: 'user'
  };
};

export const saveChat = async (chatHistory) => {
  localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
};

export const loadChat = () => {
  return JSON.parse(localStorage.getItem('chatHistory')) || [];
};