// import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling
// Component for Education
const Education = ({ formData, handleChange }) => {
    return (
      <div className="form">
        <h1>Education</h1>
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
        />
        <input
          type="text"
          name="passoutYear"
          placeholder="Passout Year"
          value={formData.passoutYear}
          onChange={handleChange}
        />
        <input
          type="number"
          name="cgpa"
          placeholder="CGPA"
          value={formData.cgpa}
          onChange={handleChange}
        />
      </div>
    );
  };

  export default Education;