import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isEmpty, map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import UncontrolledBoard from "../Milestones/UncontrolledBoard";

import "../../assets/scss/milestones.scss";
import { getMilestones } from "../../store/milestones/actions";

const MilestonesKanban = (props) => {
  const { milestones, onGetMilestones } = props;

  useEffect(() => {
    onGetMilestones();
  }, [onGetMilestones]);

  const data = map(milestones, (milestone) => ({
    ...milestone,
    cards: milestone.milestones,
  }));
  data.length = Math.min(data.length, 3);

  return (
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Milestones" breadcrumbItem="Kanban Board" />
        {!isEmpty(data) && (
          <UncontrolledBoard board={{ columns: data }} content={milestones} />
        )}
      </div>
    </React.Fragment>
  );
};

MilestonesKanban.propTypes = {
  milestones: PropTypes.array,
  onGetMilestones: PropTypes.func,
};

const mapStateToProps = ({ milestones }) => ({
  milestones: milestones.milestones,
});

const mapDispatchToProps = (dispatch) => ({
  onGetMilestones: () => dispatch(getMilestones()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MilestonesKanban));
