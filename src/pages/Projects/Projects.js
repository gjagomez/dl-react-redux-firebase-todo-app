import React from "react";
import { func, arrayOf, string } from "prop-types";

import "./Projects.styles.scss";
import DashboardMainContainer from "../../redux/containers/components/DashboardMainContainer";
import HeaderContainer from "../../redux/containers/components/HeaderContainer";
import AddNew from "../../components/AddNew/AddNew";
import ProjectsCardContainer from "../../redux/containers/components/ProjectsCardContainer";
import withProtectedRoute from "../../hoc/withProtectedRoute";
import SEO from "../../components/SEO/SEO";
import seo from "../../utils/seo";

function Projects({ projectIds = null, openAddProjectModal }) {
  return (
    <>
      <SEO title={seo.pages.projects.title} />
      <HeaderContainer />
      <DashboardMainContainer>
        <section className="Section" aria-labelledby="projects-labels">
          <header className="Projects__Section__Header">
            <h1 className="Section__Title" id="projects-labels">
              Projects
            </h1>
            <AddNew onClick={() => openAddProjectModal()}>Add project</AddNew>
          </header>
          {projectIds && projectIds.length ? (
            <div className="row-nested">
              {projectIds.map((projectId) => (
                <ProjectsCardContainer key={projectId} projectID={projectId} />
              ))}
            </div>
          ) : (
            <p>Add a project to get started</p>
          )}
        </section>
      </DashboardMainContainer>
    </>
  );
}

Projects.propTypes = {
  projectIds: arrayOf(string).isRequired,
  openAddProjectModal: func.isRequired,
};

export default withProtectedRoute()(Projects);
