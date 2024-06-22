import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const identifyFlowerRequest = async (image) => {
  const formData = new FormData();
  formData.append('file', image);

  const response = await axios.post(`${BASE_URL}/predict`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (response.status !== 200) {
    throw new Error('Failed to identify flower');
  }

  return response.data;
};
