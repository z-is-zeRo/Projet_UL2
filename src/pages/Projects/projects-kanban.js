import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isEmpty, map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import UncontrolledBoard from "../Projects/UncontrolledBoard";

import "../../assets/scss/projects.scss";
import { getProjects } from "../../store/projects/actions";

const ProjectsKanban = (props) => {
  const { projects, onGetProjects } = props;

  useEffect(() => {
    onGetProjects();
  }, [onGetProjects]);

  const data = map(projects, (project) => ({
    ...project,
    cards: project.projects,
  }));
  data.length = Math.min(data.length, 3);

  return (
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Projects" breadcrumbItem="Kanban Board" />
        {!isEmpty(data) && (
          <UncontrolledBoard board={{ columns: data }} content={projects} />
        )}
      </div>
    </React.Fragment>
  );
};

ProjectsKanban.propTypes = {
  projects: PropTypes.array,
  onGetProjects: PropTypes.func,
};

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
});

const mapDispatchToProps = (dispatch) => ({
  onGetProjects: () => dispatch(getProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsKanban));
