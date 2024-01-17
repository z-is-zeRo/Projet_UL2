import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty, map, size } from "lodash";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import ReactApexChart from "react-apexcharts";

import { getMilestones } from "../../store/milestones/actions";
import { options, series, statusClasses } from "../../common/data/milestones";

const MilestonesList = (props) => {
  const { milestones, onGetMilestones } = props;

  useEffect(() => {
    onGetMilestones();
  }, [onGetMilestones]);

  const recentMilestones = milestones.find(
    (milestone) => milestone.title === "Recent Milestones"
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Milestones" breadcrumbItem="Milestone List" />
        {/* Render Breadcrumbs */}
        <Row>
          <Col lg={8}>
            {map(milestones, (milestone, i) => (
              <Card key={i}>
                <CardBody>
                  <CardTitle className="mb-4">{milestone.title}</CardTitle>
                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        {map(milestone.milestones, (item, i) => (
                          <tr key={i}>
                            <td style={{ width: "60px" }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id={item.id}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.id}
                                />
                              </div>
                            </td>
                            <td>
                              <h5 className="text-truncate font-size-14 m-0">
                                <Link to="#" className="text-dark">
                                  {item.description}
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div className="team">
                                {map(
                                  item.members,
                                  (member, index) =>
                                    index < 2 && (
                                      <Link
                                        to="#"
                                        className="team-member d-inline-block"
                                        key={index}
                                      >
                                        {member.userImg ? (
                                          <img
                                            src={member.userImg}
                                            className="rounded-circle avatar-xs m-1"
                                            alt=""
                                          />
                                        ) : (
                                          <div className="avatar-xs m-1">
                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                              {member.username.charAt(0)}
                                            </span>
                                          </div>
                                        )}
                                      </Link>
                                    )
                                )}
                                {size(item.members) > 2 && (
                                  <Link to="#" className="d-inline-block">
                                    <div className="avatar-xs">
                                      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        {size(item.members) - 2} +
                                      </span>
                                    </div>
                                  </Link>
                                )}
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <span
                                  className={classNames(
                                    "badge badge-pill font-size-11",
                                    statusClasses[item.status.toLowerCase()]
                                  )}
                                >
                                  {item.status}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Col>

          <Col lg={4}>
            <Card>
              <CardBody>
                <CardTitle className="mb-3">Milestones </CardTitle>
                <ReactApexChart
                  options={options}
                  series={series}
                  type="line"
                  height={280}
                  className="apex-charts"
                />
              </CardBody>
            </Card>

            {!isEmpty(recentMilestones) && (
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    {recentMilestones.title}
                  </CardTitle>
                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        {map(recentMilestones.milestones, (item, i) => (
                          <tr key={i}>
                            <td>
                              <h5 className="text-truncate font-size-14 m-0">
                                <Link to="#" className="text-dark">
                                  {item.description}
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div className="team">
                                {map(
                                  item.members,
                                  (member, index) =>
                                    index < 2 && (
                                      <Link
                                        to="#"
                                        className="team-member d-inline-block"
                                        key={index}
                                      >
                                        {member.userImg ? (
                                          <img
                                            src={member.userImg}
                                            className="rounded-circle avatar-xs m-1"
                                            alt=""
                                          />
                                        ) : (
                                          <div className="avatar-xs">
                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                              {member.username.charAt(0)}
                                            </span>
                                          </div>
                                        )}
                                      </Link>
                                    )
                                )}
                                {size(item.members) > 2 && (
                                  <Link
                                    to="#"
                                    className="team-member d-inline-block"
                                  >
                                    <div className="avatar-xs">
                                      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        {size(item.members) - 2} +
                                      </span>
                                    </div>
                                  </Link>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

MilestonesList.propTypes = {
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
)(withRouter(MilestonesList));
