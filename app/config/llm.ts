export const LLM_CONFIG = {
  providers: {
    claude: {
      name: 'Claude 3',
      models: [
        { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', features: ['vision', 'code'] },
        { id: 'claude-3-sonnet-20240229', name: 'Claude 3 Sonnet', features: ['vision'] }
      ],
      apiEndpoint: process.env.CLAUDE_API_ENDPOINT
    },
    openai: {
      name: 'OpenAI',
      models: [
        { id: 'gpt-4-vision-preview', name: 'GPT-4 Vision', features: ['vision'] },
        { id: 'gpt-4-turbo-preview', name: 'GPT-4 Turbo', features: ['code'] }
      ],
      apiEndpoint: process.env.OPENAI_API_ENDPOINT
    }
  },
  features: {
    vision: {
      enabled: true,
      supportedFormats: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
      maxSize: 5242880 // 5MB
    }
  }
};