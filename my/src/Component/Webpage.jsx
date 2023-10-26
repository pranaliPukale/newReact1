import Home from "./Home";
import Services from "./Services";
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import CompComunication from './ComponentCommunication/CompComunication';
import PropsInClassComp from "./ComponentCommunication/PropsInClassComp";
import StateInComp from "./ComponentCommunication/StateInComp";
const Webpage =()=>
{
    let name="Sandhya";
    let person={
        age:23,
        sal:24000
    }
    return(
        <>
         <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/services" element={<Services/>}></Route>
                <Route exact path="/StateInComp" element={<StateInComp/>}></Route>
                <Route exact path="/CompCommunication" element={<CompComunication My={name} company="TCS" personObj={person}/>}></Route>
                <Route exact path="/PropsInClassComp" element={<PropsInClassComp My={name} company="TCS" personObj={person}/>}></Route>
            </Routes>
         </Router>
        </>
    )
}
export default Webpage;