import React from "react"
import { Card, CardBody, Table, CardTitle, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { Link } from "react-router-dom"

const Statistiques = () => {
    return (
        <Col lg={8}>
            <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4">STATISTIQUES DE {'MARS'}</CardTitle>
                    <div className="table-responsive">
                        <Table className="table-centered">
                            <thead>
                                <tr>
                                    <th scope="col">Métriques</th>
                                    <th scope="col">Réel</th>
                                    <th scope="col">Prévisionnel</th>
                                    <th scope="col">Différence</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Bouteilles collectées</Link>
                                    </td>
                                    <td>159</td>
                                    <td>6</td>
                                    <td>24</td>
                                </tr>
                               <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Bouteilles lavées</Link>
                                    </td>
                                    <td>237</td>
                                    <td>9</td>
                                    <td>37</td>
                                </tr>
                               <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Bouteilles cassées</Link>
                                    </td>
                                    <td>262</td>
                                    <td>16</td>
                                    <td>24</td>
                                </tr>
                               <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                               <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Nombre de tournées</Link>
                                    </td>
                                    <td>356</td>
                                    <td>16</td>
                                    <td>49</td>
                                </tr>
                               <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">Km parcouru</Link>
                                    </td>
                                    <td>356</td>
                                    <td>16</td>
                                    <td>49</td>
                                </tr>
                               <tr>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">CO2 consommé</Link>
                                    </td>
                                    <td>356</td>
                                    <td>16</td>
                                    <td>49</td>
                                </tr>
                               
                                
                            </tbody>
                        </Table>
                    </div>
                    <div className="mt-3">
                        <Pagination className="pagination pagination-rounded justify-content-center mb-0">
                            <PaginationItem><PaginationLink to="#">{'<'}</PaginationLink></PaginationItem>
                            <PaginationItem className="active"><PaginationLink to="#">1</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">...</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">11</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">{'>'}</PaginationLink></PaginationItem>
                        </Pagination>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Statistiques;