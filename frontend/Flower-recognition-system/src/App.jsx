import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUploader from './Components/ImageUploader/ImageUploader'
import ImagePreview from './Components/ImagePreview/ImagePreview'
function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app-container">
      <h1>Flower Identification</h1>
      <ImageUploader setSelectedImage={setSelectedImage} />
      {selectedImage && <ImagePreview image={selectedImage} />}
      <button 
        className="submit-button"
        onClick={() => alert('Image submitted for identification')}
        disabled={!selectedImage}
      >
        Identify Flower
      </button>
    </div>
  );
};


export default App
