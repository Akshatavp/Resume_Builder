// import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling

const Experience = ({ formData, handleChange }) => {
    return (
      <div className="form">
          <h1>Experience</h1>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
        />
      </div>
    );
  };

export default Experience;