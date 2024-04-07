import React, { useEffect, useState } from 'react';
import './styles.css'; // Import your CSS file for styling

// Component for Personal Details
const PersonalDetails = ({ formData, handleChange, setFormData }) => {

  const [imageUrl, setImageUrl] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];

      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  useEffect(() => {
    // Validate form fields
    const isFormFilled =
      formData.fullName &&
      formData.phoneNumber &&
      formData.email &&
      formData.image;
    setIsFormValid(isFormFilled);
  }, [formData]);

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
    <div className="form form-group">
       <h1>Personal Details</h1>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required // <-- Added required attribute
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required // <-- Added required attribute
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required // <-- Added required attribute
      />
      {/* <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      /> */}
      <input
        type="file"
        // className="form-control"
        onChange={handleImageChange}
        accept="image/*"
        required // <-- Added required attribute
      />
    </div>
  );
};

export default PersonalDetails;
