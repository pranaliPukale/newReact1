import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "./crudStyle.css";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

//import { EmployeeContext } from "../CRUD_using_context_api/EmployeeStore";

import {deleteEmployee} from './employeeSlice'

 import { useSelector } from "react-redux";
 import { useDispatch } from "react-redux";

const EmployeeList = () => {
  //const { employees,deleteEmployee } = useContext(EmployeeContext);
  
 const employees = useSelector(state =>state.employee.employees)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleDelete =(id)=>{
    //deleteEmployee(id)
    dispatch(deleteEmployee(id))
  }

  return (
    <div>
      <h5>EMPLOYEE LIST</h5>
      <div className="addEmployeeBtn">
        <Button variant="primary" onClick={() => navigate("/addEmployee")}>
          ADD EMPLOYEE
        </Button>
      </div>
      <div
        style={{ marginLeft: "100px", marginRight: "100px", marginTop: "20px" }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>EMPLOYEE ID</th>
              <th>EMPLOYEE NAME</th>
              <th>EMPLOYEE POSITION</th>
              <th>COMPANY</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.empID}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.company}</td>
                <td>
                  <Button variant="primary" size="sm" onClick={()=>navigate(`/editEmpoyee/${employee.id}`)}>
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={()=>handleDelete(employee.id)} style={{marginLeft:"10px"}}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default EmployeeList;

