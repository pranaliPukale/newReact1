// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Webpage from './Component/Webpage';
import Website1 from './Component/Assignment1/Website1';
import EventFuction from './Component/EventFuction';
import Webpage from './Component/Webpage'; 
import UseEffectHook from './Component/UseEffectHook';
import ParentComp from './Component/ComponentCommunication/ParentComp';
import ParentCompFunction from './Component/ComponentCommunication/ParentCompFunction';
import UseMemoParentComp from './Component/UseMemoHook.jsx/UseMemoParentComp';
import Form1 from './Component/FormHandling/Form1';
import UseReducerHook1 from './Component/UseReducerHook/UseReducerHook1';
import Parent from './Component/UseContextHook/Parent';
import ControledComponent from './Component/ControledComponent';
import UnControledComponent from './Component/UnControledComponent';
import ConditionalRendernig from './Component/ConditionalRendering';
import EmployeeList from './Component/CRUD_using_context_api/EmployeeList';
import AddEmployee from './Component/CRUD_using_context_api/AddEmployee';
import EditEmployee from './Component/CRUD_using_context_api/EditEmployee';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {EmployeeProvider} from './Component/CRUD_using_context_api/EmployeeStore'

import Chart1 from './Component/Chart1';
function App() {
  
  return (
   
   // <div className="App">
   //   <header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
       // <p>
       //   Edit <code>src/App.js</code> and save to reload.
       // </p>
       // <a
        //  className="App-link"
         // href="https://reactjs.org"
         // target="_blank"
         // rel="noopener noreferrer"
       // >
        //  Learn React
        //</a>
      //</header>
   // </div>
   <div  className='App'>
    

    <Router>
        <EmployeeProvider>
          <Routes>
            <Route exact path='/' element={<EmployeeList/>}></Route>
            <Route exact path='/addEmployee' element={<AddEmployee/>}> </Route>
            <Route  exact path='/editEmpoyee' element={<EditEmployee/>}></Route>
          </Routes>
        </EmployeeProvider>
        
      </Router>
    
  </div>
   
  
   
  );
}

export default App;
