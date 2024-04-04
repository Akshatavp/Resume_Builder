// Component for Skills
const Skills = ({ formData, handleChange }) => {
    return (
      <div className="form">
        <h1>Skills</h1>
        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </div>
    );
  };

  export default Skills;