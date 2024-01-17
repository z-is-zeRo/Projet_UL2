import React from "react"
import { Card, CardBody, Table, CardTitle, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { Link } from "react-router-dom"

const ClientTransaction = () => {
    return (
        <Col lg={8}>
            <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4">CLIENT</CardTitle>
                    <div className="table-responsive">
                        <Table className="table-centered">
                            <thead>
                                <tr>
                                    {/* <th scope="col">ID</th> */}
                                    {/* <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Value A</th>
                                    <th scope="col">Value B</th> */}
                                    {/* <th scope="col" colSpan="2">Payment Status</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Client 1</Link>
                                    </td>
                                    <td>19%</td>
                                    <td><i className="dripicons-zoom-in"/>{" "}</td>
                                    <td><i className="fas fa-truck"/>{" "}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Client 2</Link>
                                    </td>
                                    <td>19%</td>
                                    <td><i className="dripicons-zoom-in"/>{" "}</td>
                                    <td><i className="fas fa-truck"/>{" "}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Client 3</Link>
                                    </td>
                                    <td>19%</td>
                                    <td><i className="dripicons-zoom-in"/>{" "}</td>
                                    <td><i className="fas fa-truck"/>{" "}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Client 4</Link>
                                    </td>
                                    <td>19%</td>
                                    <td><i className="dripicons-zoom-in"/>{" "}</td>
                                    <td><i className="fas fa-truck"/>{" "}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Client 5</Link>
                                    </td>
                                    <td>19%</td>
                                    <td><i className="dripicons-zoom-in"/>{" "}</td>
                                    <td><i className="fas fa-truck"/>{" "}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Client 6</Link>
                                    </td>
                                    <td>19%</td>
                                    <td><i className="dripicons-zoom-in"/>{" "}</td>
                                    <td><i className="fas fa-truck"/>{" "}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Client 7</Link>
                                    </td>
                                    <td>19%</td>
                                    <td><i className="dripicons-zoom-in"/>{" "}</td>
                                    <td><i className="fas fa-truck"/>{" "}</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </div>
                    
                </CardBody>
            </Card>
        </Col>
    )
}

export default ClientTransaction;