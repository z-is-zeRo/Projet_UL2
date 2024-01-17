import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Table,
} from "reactstrap";

const CardMilestones = (props) => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">{props.milestoneTitle}</CardTitle>
          <div className="table-responsive">
            <Table className="table-nowrap table-centered mb-0">
              <tbody>
                {props.data.map((milestone, i) => (
                  <tr key={i}>
                    <td style={{ width: "60px" }}>
                      <div className="custom-control custom-checkbox">
                        {milestone.isChecked ? (
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            checked
                            id={"customCheck1_" + milestone.id}
                          />
                        ) : (
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            id={"customCheck1_" + milestone.id}
                          />
                        )}
                        <Label
                          className="custom-control-label"
                          htmlFor={"customCheck1_" + milestone.id}
                        />
                      </div>
                    </td>
                    <td>
                      <h5 className="text-truncate font-size-14 m-0">
                        <Link to="#" className="text-dark">
                          {milestone.title}
                        </Link>
                      </h5>
                    </td>
                    <td>
                      <div className="team">
                        {milestone.teamMembers.map((member) =>
                          member.image !== "Null" ? (
                            <Link to="#" className="team-member d-inline-block">
                              <img
                                src={member.image}
                                className="rounded-circle avatar-xs m-1"
                                alt=""
                              />
                            </Link>
                          ) : (
                            <Link to="#" className="team-member d-inline-block">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                  {member.imgText}
                                </span>
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <Badge
                          color={milestone.color}
                          className={
                            "badge-soft-" + milestone.color + " font-size-11"
                          }
                          pill
                        >
                          {milestone.tastStatus}
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default CardMilestones;

CardMilestones.propTypes = {
  data: PropTypes.array,
  milestoneTitle: PropTypes.string,
};
