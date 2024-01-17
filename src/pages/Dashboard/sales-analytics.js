import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

class SalesAnalytics extends Component {
  constructor(props) {
    super(props)

    this.state = [
      {
        series: [66, 34],
        options: {
          labels: ["", ""],
          plotOptions: {
            pie: {
              donut: {
                size: '75%'
              }
            }
          },
          legend: {
            show: false,
          },
          colors: ['#3b5de7', 'lightgray'],
        },
      },
      {
        series: [0, 1],
        options: {
          labels: ["", ""],
          plotOptions: {
            pie: {
              donut: {
                size: '75%'
              }
            }
          },
          legend: {
            show: false,
          },
          colors: ['#3b5de7', 'lightgray'],
        },
      },
      {
        series: [33, 66],
        options: {
          labels: ["", ""],
          plotOptions: {
            pie: {
              donut: {
                size: '75%'
              }
            }
          },
          legend: {
            show: false,
          },
          colors: ['#3b5de7', 'lightgray'],
        },
      }
    ]
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">ETAT DU STOCK</h4>

            <Row className="align-items-center">
              <Col sm={4}>
                <ReactApexChart
                  options={this.state[0].options}
                  series={this.state[0].series}
                  type="donut"
                  height={245}
                  className="apex-charts"
                />
              </Col>
              <Col sm={3}>
                <ReactApexChart
                  options={this.state[1].options}
                  series={this.state[1].series}
                  type="donut"
                  height={245}
                  className="apex-charts"
                />
              </Col>
              <Col sm={4}>
                <ReactApexChart
                  options={this.state[2].options}
                  series={this.state[2].series}
                  type="donut"
                  height={245}
                  className="apex-charts"
                />
              </Col>
              {/* <Col sm={6}>
                <div>
                  <Row>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-primary me-1"></i>{" "}Online
                            </p>
                        <h5>$ 2,652</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-success me-1"></i>{" "}Offline</p>
                        <h5>$ 2,284</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-warning me-1"></i>{" "}Marketing</p>
                        <h5>$ 1,753</h5>
                      </div>
                    </div>
                  </Row>
                </div>
              </Col> */}
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default SalesAnalytics
