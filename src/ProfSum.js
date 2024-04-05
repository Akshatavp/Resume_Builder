// Component for Projects
const ProfSum = ({ formData, handleChange }) => {
    return (
      
      <div className="form">
        <h1>Professional Summary</h1>
        <textarea
          name="professionalSummary"
          placeholder="Professional Summary"
          value={formData.profSum}
          onChange={handleChange}
        />
      </div>
    );
  };

  export default ProfSum;