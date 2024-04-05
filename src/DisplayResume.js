import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import htmlToPdf from 'html-to-pdf-js';

import './styles.css'; // Import your CSS file for styling

import html2pdf from 'html2pdf.js';



// Styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    padding: 20
  },
  section: {
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  }
});

const DisplayResume = ({ formData }) => {
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

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-display');
    const htmlContent = element.innerHTML;

    // htmlToPdf().set({ html: htmlContent }).save();
    window.print()
};


  return (
    <div className="resume-display" id="resume-display">
      <div style={{
        width:"100%"
      }}>
         <img src={imageUrl}  style={{
          width: "150px",
          height: "150px",
          margin: "auto",
          marginLeft: "42%",
          borderRadius: "50%"
         }}/></div>
         
         <hr/>
      <h1>{formData.fullName}</h1>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phoneNumber}</p>
   
      <h2>Professional Summary</h2>
      <p>{formData.professionalSummary}</p>
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
      <pre>{formData.skills}</pre>
      <hr />
      <h2>Projects</h2>
      <p>{formData.projects}</p>
      <hr />
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default DisplayResume;
