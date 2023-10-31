import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import './crudStyle.css'

import { useNavigate } from 'react-router-dom';

import  {EmployeeContext} from '../CRUD_using_context_api/EmployeeStore'

const EmployeeList = () => {

    const {employees} = useContext(EmployeeContext)

    const navigate = useNavigate()

  return (
    <div>
        <h5>EMPLOYEE LIST</h5>
        <div className='addEmployeeBtn'>
           <Button variant="primary" onClick={()=>navigate('/addEmployee')}>ADD EMPLOYEE</Button>
        </div>
        <div style={{marginLeft:'100px',marginRight:"100px"}}>
            <table>
                <thead>
                    <tr>
                    <th>SR</th>
                    <th>EMPLOYEE ID</th>
                    <th>EMPLOYEE NAME</th>
                    <th>POSITION</th>
                    <th>COMPANY</th>
                    </tr>
                </thead>
                <tbody>
                <th></th>
                    {employees.map((employee,index)=>(
                        <tr key={employee.id}>
                            <td>{index+1}</td>
                            <td>{employee.empID}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.company}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default EmployeeList
