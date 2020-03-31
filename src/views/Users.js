import React from "react";

import { Container, Row, Col, Card, CardHeader, CardBody,Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";


const Users = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="User Details" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>

    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">All Notifications</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    User_Id
                  </th>
                  <th scope="col" className="border-0">
                    Username/Phone
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    Squad
                  </th>
                  <th scope="col" className="border-0">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>Gdańsk</td>
                  <td>107-0339</td>
                  <td>Gdańsk</td>
                  <td> <Button theme="accent">Update Account</Button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark</td>
                  <td>Angela</td>
                  <td>Estonia</td>
                  <td>Borghetto di Vara</td>
                  <td>1-660-850-1647</td>
                  <td>Borghetto di Vara</td>
                  <td> <Button theme="accent">Update Account</Button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry</td>
                  <td>Nathan</td>
                  <td>Cyprus</td>
                  <td>Braunau am Inn</td>
                  <td>214-4225</td>
                  <td>Braunau am Inn</td>
                  <td> <Button theme="accent">Update Account</Button></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colt</td>
                  <td>Angela</td>
                  <td>Liberia</td>
                  <td>Bad Hersfeld</td>
                  <td>1-848-473-7416</td>
                  <td>Bad Hersfeld</td>
                  <td> <Button theme="accent">Update Account</Button></td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  
  </Container>
);

export default Users;
