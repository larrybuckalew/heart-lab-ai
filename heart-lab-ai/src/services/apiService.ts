import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.heartlab.ai';

export const apiService = {
  async fetchResearchProjects() {
    try {
      const response = await axios.get(`${API_BASE_URL}/research/projects`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch research projects', error);
      return [];
    }
  },

  async submitContactForm(data: {
    name: string;
    email: string;
    message: string;
  }) {
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, data);
      return response.data;
    } catch (error) {
      console.error('Failed to submit contact form', error);
      throw error;
    }
  }
};