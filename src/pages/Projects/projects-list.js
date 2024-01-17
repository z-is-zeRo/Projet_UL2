import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty, map, size } from "lodash";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import ReactApexChart from "react-apexcharts";

import { getProjects } from "../../store/projects/actions";
import { options, series, statusClasses } from "../../common/data/projects";

const ProjectsList = (props) => {
  const { projects, onGetProjects, submittedFormData } = props;

  useEffect(() => {
    onGetProjects();
  }, [onGetProjects]);

  const recentProjects = projects.find(
    (project) => project.title === "Recent Projects"
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Projects" breadcrumbItem="Project List" />
        {/* Render Breadcrumbs */}
        <Row>
          <Col lg={8}>
            {map(projects, (project, i) => (
              <Card key={i}>
                <CardBody>
                  <CardTitle className="mb-4">{project.title}</CardTitle>
                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        {map(project.projects, (item, i) => (
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
                <CardTitle className="mb-3">Projects </CardTitle>
                <ReactApexChart
                  options={options}
                  series={series}
                  type="line"
                  height={280}
                  className="apex-charts"
                />
              </CardBody>
            </Card>

            {submittedFormData && (
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Submitted Form Data</CardTitle>
                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td>Project Name:</td>
                          <td>{submittedFormData.projectName}</td>
                        </tr>
                        {/* Ajoutez les autres champs du formulaire ici */}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            )}

            {!isEmpty(recentProjects) && (
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">{recentProjects.title}</CardTitle>
                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        {map(recentProjects.projects, (item, i) => (
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

ProjectsList.propTypes = {
  projects: PropTypes.array,
  onGetProjects: PropTypes.func,
  submittedFormData: PropTypes.object, // Ajoutez cette ligne pour le nouvel état
};

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
  submittedFormData: projects.submittedFormData, // Ajoutez cette ligne pour le nouvel état
});

const mapDispatchToProps = (dispatch) => ({
  onGetProjects: () => dispatch(getProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsList));

// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { isEmpty, map, size } from "lodash";
// import { Link, withRouter } from "react-router-dom";
// import classNames from "classnames";
// import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
// //Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

// import ReactApexChart from "react-apexcharts";

// import { getProjects } from "../../store/projects/actions";
// import { options, series, statusClasses } from "../../common/data/projects";

// const ProjectsList = (props) => {
//   const { projects, onGetProjects } = props;

//   useEffect(() => {
//     onGetProjects();
//   }, [onGetProjects]);

//   const recentProjects = projects.find(
//     (project) => project.title === "Recent Projects"
//   );

//   // const [submittedFormData, setSubmittedFormData] = useState(null);

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Breadcrumbs title="Projects" breadcrumbItem="Project List" />
//         {/* Render Breadcrumbs */}
//         <Row>
//           <Col lg={8}>
//             {map(projects, (project, i) => (
//               <Card key={i}>
//                 <CardBody>
//                   <CardTitle className="mb-4">{project.title}</CardTitle>
//                   <div className="table-responsive">
//                     <table className="table table-nowrap align-middle mb-0">
//                       <tbody>
//                         {map(project.projects, (item, i) => (
//                           <tr key={i}>
//                             <td style={{ width: "60px" }}>
//                               <div className="form-check">
//                                 <input
//                                   type="checkbox"
//                                   className="form-check-input"
//                                   id={item.id}
//                                 />
//                                 <label
//                                   className="form-check-label"
//                                   htmlFor={item.id}
//                                 />
//                               </div>
//                             </td>
//                             <td>
//                               <h5 className="text-truncate font-size-14 m-0">
//                                 <Link to="#" className="text-dark">
//                                   {item.description}
//                                 </Link>
//                               </h5>
//                             </td>
//                             <td>
//                               <div className="team">
//                                 {map(
//                                   item.members,
//                                   (member, index) =>
//                                     index < 2 && (
//                                       <Link
//                                         to="#"
//                                         className="team-member d-inline-block"
//                                         key={index}
//                                       >
//                                         {member.userImg ? (
//                                           <img
//                                             src={member.userImg}
//                                             className="rounded-circle avatar-xs m-1"
//                                             alt=""
//                                           />
//                                         ) : (
//                                           <div className="avatar-xs m-1">
//                                             <span className="avatar-title rounded-circle bg-soft-primary text-primary">
//                                               {member.username.charAt(0)}
//                                             </span>
//                                           </div>
//                                         )}
//                                       </Link>
//                                     )
//                                 )}
//                                 {size(item.members) > 2 && (
//                                   <Link to="#" className="d-inline-block">
//                                     <div className="avatar-xs">
//                                       <span className="avatar-title rounded-circle bg-soft-primary text-primary">
//                                         {size(item.members) - 2} +
//                                       </span>
//                                     </div>
//                                   </Link>
//                                 )}
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center">
//                                 <span
//                                   className={classNames(
//                                     "badge badge-pill font-size-11",
//                                     statusClasses[item.status.toLowerCase()]
//                                   )}
//                                 >
//                                   {item.status}
//                                 </span>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardBody>
//               </Card>
//             ))}
//           </Col>

//           <Col lg={4}>
//             <Card>
//               <CardBody>
//                 <CardTitle className="mb-3">Projects </CardTitle>
//                 <ReactApexChart
//                   options={options}
//                   series={series}
//                   type="line"
//                   height={280}
//                   className="apex-charts"
//                 />
//               </CardBody>
//             </Card>

//             {!isEmpty(recentProjects) && (
//               <Card>
//                 <CardBody>
//                   <CardTitle className="mb-4">{recentProjects.title}</CardTitle>
//                   <div className="table-responsive">
//                     <table className="table table-nowrap align-middle mb-0">
//                       <tbody>
//                         {map(recentProjects.projects, (item, i) => (
//                           <tr key={i}>
//                             <td>
//                               <h5 className="text-truncate font-size-14 m-0">
//                                 <Link to="#" className="text-dark">
//                                   {item.description}
//                                 </Link>
//                               </h5>
//                             </td>
//                             <td>
//                               <div className="team">
//                                 {map(
//                                   item.members,
//                                   (member, index) =>
//                                     index < 2 && (
//                                       <Link
//                                         to="#"
//                                         className="team-member d-inline-block"
//                                         key={index}
//                                       >
//                                         {member.userImg ? (
//                                           <img
//                                             src={member.userImg}
//                                             className="rounded-circle avatar-xs m-1"
//                                             alt=""
//                                           />
//                                         ) : (
//                                           <div className="avatar-xs">
//                                             <span className="avatar-title rounded-circle bg-soft-primary text-primary">
//                                               {member.username.charAt(0)}
//                                             </span>
//                                           </div>
//                                         )}
//                                       </Link>
//                                     )
//                                 )}
//                                 {size(item.members) > 2 && (
//                                   <Link
//                                     to="#"
//                                     className="team-member d-inline-block"
//                                   >
//                                     <div className="avatar-xs">
//                                       <span className="avatar-title rounded-circle bg-soft-primary text-primary">
//                                         {size(item.members) - 2} +
//                                       </span>
//                                     </div>
//                                   </Link>
//                                 )}
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardBody>
//               </Card>
//             )}
//           </Col>
//         </Row>
//       </div>
//     </React.Fragment>
//   );
// };

// ProjectsList.propTypes = {
//   projects: PropTypes.array,
//   onGetProjects: PropTypes.func,
// };

// const mapStateToProps = ({ projects }) => ({
//   projects: projects.projects,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onGetProjects: () => dispatch(getProjects()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(ProjectsList));
