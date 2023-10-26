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
      <UseReducerHook1/>
  </div>
   
  
   
  );
}

export default App;
