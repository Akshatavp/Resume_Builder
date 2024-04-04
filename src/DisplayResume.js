import React, { useState,useEffect } from 'react';

import './styles.css'; // Import your CSS file for styling

const DisplayResume = ({ formData }) => {
  const handleDownload = () => {
    const data = JSON.stringify(formData, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
console.log(formData)
const [imageUrl, setImageUrl] = useState("");
useEffect(() => {
  // Create an object URL for the file
  if (formData.image) {
    const url = URL.createObjectURL(formData.image);
    setImageUrl(url);

    // Clean up the object URL on unmount
    return () => URL.revokeObjectURL(url);
  }
}, [formData.image]);
  return (
    <div className="resume-display">
      <h1>{formData.fullName}</h1>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phoneNumber}</p>

      <hr />
      <h2>Education</h2>
      <p>Degree: {formData.degree}</p>
      <p>Passout Year: {formData.passoutYear}</p>
      <p>CGPA: {formData.cgpa}</p>
      <hr />
      <h2>Experience</h2>
      <p>Company: {formData.company}</p>
      <p>Duration: {formData.duration}</p>
      <p>Position: {formData.position}</p>
      <hr />
      <h2>Skills</h2>
      <p>{formData.skills}</p>
      <hr />
      <h2>Projects</h2>
      <p>{formData.projects}</p>
      <hr />
      <h2>Achievements and Certificates</h2>
      <p>{formData.achCerts}</p>
      <hr />
      
       
          <div className="photo">
            <img src={imageUrl} />
          </div>
     
      
      {/* Rest of resume content */}
      
     
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default DisplayResume;
