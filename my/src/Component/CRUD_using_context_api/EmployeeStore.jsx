import React,{createContext,useState} from 'react';

export const EmployeeContext = createContext()
export const EmployeeProvider =({children})=>{
    const [employees,setEmployee] =useState([])
    const addEmployee =(employee)=>
    {
        setEmployee([...employees,employee])
    }
      
    const updateEmployee =(id,updatedEmployee)=>{
        setEmployee(
            employees.map((employee)=> employee.id ===id ? updatedEmployee : employee)
            //Check it employee having same id
            //it will check it is updated or not
            //if updated then it will show updated employee o.w.it show previous employee info
        )
    }
    const deleteEmployee =(id)=>{
        setEmployee(employees.filter((employee)=>employee.id !== id))
       }
   
    return(
        <EmployeeContext.Provider value={{employees,addEmployee,updateEmployee,deleteEmployee}}>
            {children}
        </EmployeeContext.Provider>
    )
}
