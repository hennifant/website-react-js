import React from "react";
import SectionContainer from "../../containers/SectionContainer.js";
import ProjectsGallery from "../../components/ProjectsGallery";

const Projects = () => {
  return (
    <SectionContainer title="Projects" maxWidth="1000">
      <ProjectsGallery />
    </SectionContainer>
  );
};

export default Projects;
