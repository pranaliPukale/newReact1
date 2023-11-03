import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    employees:[]
}
const employeeSlice = createSlice({
    name:'employee',
    initialState,
    reducers:{
        addEmployee : (state,action)=>{
           state.employees.push(action.payload)
        },
        updateEmployee :(state,action)=>{
            console.log(action.payload)
            const {id, updatedEmployee} = action.payload
 
            const index =state.employees.findIndex(emp => emp.id === id)
            if(index !== -1){
             state.employees[index] ={...state.employees[index],...updatedEmployee}
            }
 
         },
 
        deleteEmployee : (state,action)=>{
            state.employees = state.employees.filter(employee => employee.id !== action.payload)
        }


    }

})
export const {addEmployee,updateEmployee,deleteEmployee} = employeeSlice.actions
export default employeeSlice.reducer

