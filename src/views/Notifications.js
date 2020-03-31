import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import NavbarSearch from '../components/layout/MainNavbar/NavbarSearch.js';



const Notifications = ( {Notifications}) => {

  return(

 

  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="All Notifications" subtitle="SMS SERVICE" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">All Notifications</h6>
          </CardHeader>
          {/* {Notifications.map((list) => ( */}
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Sender_Id
                  </th>
                  <th scope="col" className="border-0">
                    Sender_Type
                  </th>
                  <th scope="col" className="border-0">
                    Recipient
                  </th>
                  <th scope="col" className="border-0">
                    Type
                  </th>
                  <th scope="col" className="border-0">
                    Message
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    Reason
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>list._id</td>
          <td>list.senderId.name</td>
          <td>list.senderType</td>
                  <td>list.recipient</td>
                  <td>list.type</td>
                  <td>list.message</td>
                  <td>list.status</td>
                  <td>list.apiResponse</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
             
             {/* )} */}
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
          
            <Row>
    
      <Col lg="8" md="12" sm="12" className="mb-4">
      <h6 className="m-0 text-white">Filter by Sender_Id</h6>
      </Col>
      <Col lg="4" md="6" sm="12" className="mb-4">
         <NavbarSearch/>
      </Col>

     

   

    
    </Row>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Sender_Id
                  </th>
                  <th scope="col" className="border-0">
                    Sender_Type
                  </th>
                  <th scope="col" className="border-0">
                    Recipient
                  </th>
                  <th scope="col" className="border-0">
                    Type
                  </th>
                  <th scope="col" className="border-0">
                    Message
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    Reason
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
                  <td>107-0339</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
 )
} ;

export default Notifications;
