import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput,Button } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
      <label htmlFor="feEmailAddress">Recipient Number :</label>
        <FormInput size="lg" className="mb-3" placeholder="0782647985" />
        <label htmlFor="feEmailAddress">Message :</label>
        <ReactQuill className="add-new-post__editor mb-1" />
      </Form>
    </CardBody>
    <Button type="submit">Send Notification</Button>
  </Card>
 
);

export default Editor;
