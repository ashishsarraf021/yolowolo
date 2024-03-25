import React from 'react';
import './TextAreaWithBackground.css'; // Import CSS file for styling

const TextAreaWithBackground = () => {
  return (
    <div style={{
        backgroundColor:"#f7f8f3"
    }}>
        <div className="textarea-container">
      <textarea className="textarea" placeholder="Type here..."></textarea>
    </div>
    </div>
    
  );
};

export default TextAreaWithBackground;
