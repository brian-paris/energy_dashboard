import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-endpoint.com', // Replace with your API endpoint
});

export const getEnergyData = async () => {
  const response = await api.get('/energy-data');
  return response.data;
};

// Add more API functions as needed...