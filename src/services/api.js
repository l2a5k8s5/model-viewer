import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchModels = async () => {
  try {
    const response = await axios.get(`${API_URL}/models`);
    return response.data;
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};

export const uploadModel = async (modelData) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, modelData);
    return response.data;
  } catch (error) {
    console.error('Error uploading model:', error);
    throw error;
  }
};