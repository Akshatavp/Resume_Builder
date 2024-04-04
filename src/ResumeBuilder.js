import React, { useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import PersonalDetails from './PersonalDetails';
import DisplayResume from './DisplayResume';
import AchCerts from './AchCerts';
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
    company: '',
    duration: '',
    position: '',
    skills: '',
    projects: '',
    achCerts: ''
    
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
      
      <div className="tab-content">
        {activeTab === 0 && (
          <PersonalDetails formData={formData} setFormData={setFormData} handleChange={handleChange} />
        )}
        {activeTab === 1 && (
          <Education formData={formData} handleChange={handleChange} />
        )}
        {activeTab === 2 && (
          <Experience formData={formData} handleChange={handleChange} />
        )}
        {activeTab === 3 && (
          <Skills formData={formData} handleChange={handleChange} />
        )}
        {activeTab === 4 && (
          <Projects formData={formData} handleChange={handleChange} />
        )}
        {activeTab === 5 && (
          <AchCerts formData={formData} handleChange={handleChange} />
        )}
         {activeTab === 6 && (
        <DisplayResume formData={formData} />
      )}

<div className="tabs">
        <button disabled={activeTab === 0} onClick={handlePrevious}>Previous</button>
        <button disabled={activeTab === 6} onClick={handleNext}>Next</button>

        <button style={{display:activeTab === 5 ? "display" : "none"
      }}>Submit</button>

      </div>
       
      </div>
    </div>
    
    
  );
};

  
  export default ResumeBuilder;