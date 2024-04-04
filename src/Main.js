
import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling
// Main Resume Builder Component
const ResumeBuilder = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      image: '',
      degree: '',
      passoutYear: '',
      cgpa: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleNext = () => {
      setActiveTab(activeTab + 1);
    };
  
    const handlePrevious = () => {
      setActiveTab(activeTab - 1);
    };
  
    return (
      <div className="resume-builder">
        <div className="tabs">
          <button disabled={activeTab === 0} onClick={handlePrevious}>Previous</button>
          <button disabled={activeTab === 6} onClick={handleNext}>Next</button>
        </div>
        <div className="tab-content">
          {activeTab === 0 && (
            <PersonalDetails formData={formData} handleChange={handleChange} />
          )}
          {activeTab === 1 && (
            <Education formData={formData} handleChange={handleChange} />
          )}
          {/* Add other tab components here */}
        </div>
      </div>
    );
  };