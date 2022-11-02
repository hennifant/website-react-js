import React from "react";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../containers/SectionContainer.js";
import ProjectsGallery from "../../components/ProjectsGallery";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer id="projects" title={t("menu_projects")} maxWidth="md">
      <ProjectsGallery />
    </SectionContainer>
  );
};

export default Projects;
