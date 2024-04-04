// Component for Projects
const Projects = ({ formData, handleChange }) => {
    return (
      
      <div className="form">
        <h1>Projects</h1>
        <textarea
          name="projects"
          placeholder="Projects"
          value={formData.projects}
          onChange={handleChange}
        />
      </div>
    );
  };

  export default Projects;