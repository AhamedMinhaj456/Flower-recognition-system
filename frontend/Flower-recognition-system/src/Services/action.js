import { identifyFlowerRequest } from './request';

export const identifyFlower = async (image, setPrediction, setError) => {
  try {
    const prediction = await identifyFlowerRequest(image);
    setPrediction(prediction);
    setError(null);
  } catch (error) {
    console.error('Error identifying flower:', error);
    setError(error.message);
  }
};
