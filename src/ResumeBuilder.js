import React, { useState, useEffect } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import PersonalDetails from './PersonalDetails';
import DisplayResume from './DisplayResume';
import AchCerts from './AchCerts';
import ProfSum from './ProfSum';

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
    achCerts: '',
    professionalSummary: ''
  });

  // State to track completion status of each section
  const [sectionsCompleted, setSectionsCompleted] = useState({
    PersonalDetails: false,
    Education: false,
    Experience: false,
    Skills: false,
    Projects: false,
    AchCerts: false,
    ProfSum: false
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

  // Validation function to check if all required fields are filled
  const isFormComplete = () => {
    switch (activeTab) {
      case 0:
        return formData.fullName.trim() !== '' && formData.email.trim() !== '' && formData.phoneNumber.trim() !== '';
      case 1:
        return formData.professionalSummary.trim() !== ''; // Adjusted validation for Professional Summary
      case 2:
        return formData.degree.trim() !== '' && formData.passoutYear.trim() !== '' && formData.cgpa.trim() !== '';
      case 3:
        return formData.company.trim() !== '' && formData.duration.trim() !== '' && formData.position.trim() !== '';
      case 4:
        return formData.skills.trim() !== '';
      case 5:
        return formData.projects.trim() !== '';
      case 6:
        return formData.achCerts.trim() !== '';
      default:
        return false;
    }
  };

  // Update sections completion status whenever formData changes
  useEffect(() => {
    const { fullName, email, phoneNumber, degree, passoutYear, cgpa, company, duration, position, skills, projects, achCerts, professionalSummary } = formData;
    setSectionsCompleted({
      PersonalDetails: fullName.trim() !== '' && email.trim() !== '' && phoneNumber.trim() !== '',
      ProfSum: professionalSummary.trim() !== '', // Adjusted completion status for Professional Summary
      Education: degree.trim() !== '' && passoutYear.trim() !== '' && cgpa.trim() !== '',
      Experience: company.trim() !== '' && duration.trim() !== '' && position.trim() !== '',
      Skills: skills.trim() !== '',
      Projects: projects.trim() !== ''
      // AchCerts: achCerts.trim() !== ''
    });
  }, [formData]);

  return (
    <div className="resume-builder">
      <div className="tab-content">
        {activeTab === 0 && (
          <PersonalDetails
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        )}
        {activeTab === 1 && (
          <ProfSum
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {activeTab === 2 && (
          <Education
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {activeTab === 3 && (
          <Experience
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {activeTab === 4 && (
          <Skills
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {activeTab === 5 && (
          <Projects
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {/* {activeTab === 6 && (
          <AchCerts
            formData={formData}
            handleChange={handleChange}
          />
        )} */}
        {activeTab === 6 && <DisplayResume formData={formData} />}
        {/* Add other tabs here */}
      </div>
      <div className="tabs">
        <button className="btn btn-primary btn-sm" disabled={activeTab === 0} onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn btn-primary btn-sm" disabled={!isFormComplete()} onClick={handleNext}>
          Next
        </button>
        {/* Add Submit button */}
        {/* <button style={{ display: activeTab === 6 ? 'block' : 'none' }}>Submit</button> */}
      </div>
    </div>
  );
};

export default ResumeBuilder;
