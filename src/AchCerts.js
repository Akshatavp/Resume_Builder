import './styles.css'; // Import your CSS file for styling
// Main Resume Builder Component

const AchCerts = ({ formData, handleChange }) => {
    return (
      <div className="form">
        <textarea
          name="Achievements and Certificates"
          placeholder="Achievements and Certificates"
          defaultValue={formData.achCerts}
          onChange={handleChange}
        />
      </div>
    );
  };
  


  export default AchCerts;