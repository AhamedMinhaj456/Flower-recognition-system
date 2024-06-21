import React from 'react';
import './ImagePreview.css';

const ImagePreview = ({ image }) => {
  return (
    <div className="image-preview">
      <img src={image} alt="Selected" />
    </div>
  );
};

export default ImagePreview;
