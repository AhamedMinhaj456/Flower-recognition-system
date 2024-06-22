import React, { useState } from 'react';
import ImageUploader from './Components/ImageUploader/ImageUploader';
import ImagePreview from './Components/ImagePreview/ImagePreview';
import { identifyFlower } from './Services/action';
import './App.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="app-container">
      <h1>Flower Identification</h1>
      <ImageUploader setSelectedImage={setSelectedImage} />
      {selectedImage && <ImagePreview image={URL.createObjectURL(selectedImage)} />}
      <button 
        className="submit-button"
        onClick={() => identifyFlower(selectedImage, setPrediction, setError)}
        disabled={!selectedImage}
      >
        Identify Flower
      </button>
      {error && <div className="error">{error}</div>}
      {prediction && (
        <div className="prediction">
          <h2>Prediction</h2>
          <p>Class: {prediction.class}</p>
          <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
