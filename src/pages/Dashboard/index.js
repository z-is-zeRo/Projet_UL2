import React from "react";
import { Row, Col, CardBody, Card, Progress, Button } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import LineChart from "./line-chart";
import SalesAnalytics from "./sales-analytics";
import LatestTransaction from "./latest-transaction";
import ClientTransaction from "./client-transaction";
import Statistiques from "./statistiques";

import SimpleMap from "../Maps/LeafletMap/SimpleMap";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Dashboard</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Row>
    
        <Row>
          <Col md={6}>
            <LineChart />
          </Col>
          <Col lg={6}>
            <LatestTransaction />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <Row>
              <div className="d-flex align-items-start">
               
                <div className="flex-1 mb-5">
                  <div className="font-size-16 mt-2">Model Output</div>
                </div>
              </div>
            </Row>
            <Row>
              <Row className="mb-3">
                <Col>
                  <div className="font-size-14">Etat Outil : </div>
                </Col>
                <Col>
                  <div className="font-size-14"> {"RAS"} </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="font-size-14">Evaluer Sortie : </div>
                </Col>
                <Col lg={6}>
                    <div className="btn-group mt-2 mt-xl-0" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                      <label className="btn btn-danger me-2" htmlFor="btnradio1"><i className="dripicons-cross"/>{" "}</label>

                      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                      <label className="btn btn-success" htmlFor="btnradio2"><i className="dripicons-checkmark"/>{" "}</label>
                    </div>
                  </Col>
              </Row>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <div className="d-flex align-items-start">
                <div className="flex-1 mb-5">
                  <div className="font-size-16 mt-2">Form</div>
                </div>
              </div>
            </Row>
            <Row>
              <Row className="mb-3">
                <Col>
                  <Row className="mb-3">
                    
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Observation"
                        defaultValue=""
                      />
                    </div>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      SUBMIT
                    </Button>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="font-size-14">Evaluer Operation : </div>
                </Col>
                <Col lg={6}>
                    <div className="btn-group mt-2 mt-xl-0" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" className="btn-check" name="btnradios" id="btnradio11" autoComplete="off" defaultChecked />
                      <label className="btn btn-danger me-2" htmlFor="btnradio11"><i className="dripicons-cross"/>{" "}</label>

                      <input type="radio" className="btn-check" name="btnradios" id="btnradio21" autoComplete="off" />
                      <label className="btn btn-success" htmlFor="btnradio21"><i className="dripicons-checkmark"/>{" "}</label>
                    </div>
                  </Col>
              </Row>
            </Row>
          </Col>
        </Row>
        
        <Row>
          <Row>
            <Col lg={6}>
              <SalesAnalytics />
            </Col>
            <Col lg={6}>
              <ClientTransaction />
            </Col>

          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">PROCHAINE TOURNEE</h4>
                  <h5>
                    <Row>
                      <Col>Date : {"13/04/23"}</Col>
                      <Col>Conducteur : {"Martin R."}</Col>
                    </Row>
                  </h5>
                  <div id="leaflet-map" className="leaflet-map">
                    <SimpleMap />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Statistiques />
            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
