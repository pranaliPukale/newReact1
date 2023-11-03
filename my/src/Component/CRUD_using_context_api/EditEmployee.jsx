import React from "react";
import { useState, useContext,useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//import {EmployeeContext} from '../CRUD_using_context_api/EmployeeStore'
import {updateEmployee } from './employeeSlice'

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch =useDispatch()
  //const { employees,updateEmployee } = useContext(EmployeeContext);

  const employees = useSelector(state=> state.employee.employees)

  const [validated, setValidated] = useState(false);

  const [empID, setEmpID] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

    useEffect(() => {
        const employee = employees.find(emp=>emp.id ===parseInt(id))
        if(employee){
            setEmpID(employee.empID)
            setName(employee.name)
            setPosition(employee.position)
            setCompany(employee.company)
        }

    },[id,employees])
    

  const handleUpdate = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const updatedEmployee = { id: parseInt(id), empID, name, position, company };

    //updateEmployee(parseInt(id),updatedEmployee)

    dispatch(updateEmployee({id:parseInt(id),updatedEmployee}))
     navigate('/')

    setValidated(true);
  };

  return (
    <>
      <h5 style={{ marginTop: "20px" }}>EDIT EMPLOYEE</h5>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleUpdate}
        style={{ margin: "60px" }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Employee ID"
              value={empID}
              onChange={(e) => setEmpID(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Employee name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Employee name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Position</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Enter position"
                required
                value={position}
                onChange={(e) => setPosition(e.target.value)}
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
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button type="submit">UPDATE EMPLOYEE</Button>
      </Form>
    </>
  );
};

export default EditEmployee;

