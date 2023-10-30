import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const AddEmployee = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>

{" "}
      <h5>Add Employee</h5>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ margin: "60px" }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Employee ID"
                          />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Employee name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Employee name"
                         />
          
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Position</Form.Label>
            <InputGroup hasValidation>
               <Form.Control
                type="text"
                placeholder="Enter position"
                 required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a position.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label> Company</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Company"
                         />
            </Form.Group>
          
        </Row>

        <Button type="submit">Add Employee</Button>
      </Form>
    </>
  );
};

export default AddEmployee;

