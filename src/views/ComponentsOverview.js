import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

import CompleteFormExample from "../components/components-overview/CompleteFormExample";
import ButtonGroups from "../components/components-overview/ButtonGroups";
import InputGroups from "../components/components-overview/InputGroups";
import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";


const ComponentsOverview = () => (
  <div>
   
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Resend Notification"
          subtitle="Overview"
          className="text-sm-left"
        />
      </Row>

     

      <Row>
        <Col lg="8" className="mb-4">
         

          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form Example</h6>
            </CardHeader>
            <CompleteFormExample />
          </Card>
        </Col>

        <Col lg="4" className="mb-4">
     

          {/* Groups */}
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Groups</h6>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="px-3">
                <Form>
                  <strong className="text-muted d-block mb-3">
                    Button Groups
                  </strong>
                  <ButtonGroups />

                  <strong className="text-muted d-block mb-2">
                    Input Groups
                  </strong>
                  <InputGroups />

                  <strong className="text-muted d-block mb-2">
                    Seamless Input Groups
                  </strong>
                  <SeamlessInputGroups />
                </Form>
              </ListGroupItem>
            </ListGroup>
          </Card>

     
        </Col>
      </Row>
    </Container>
  </div>
);

export default ComponentsOverview;
