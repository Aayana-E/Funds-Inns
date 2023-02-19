
import './App.css';
//Pages
import Register from './Pages/register';
import Signin from "./Pages/signin";
import Dashboard from "./Pages/userplatform"
import ProfileBig from "./Pages/ProfileBig"
import Home from "./Pages/Home"
import LoanBig from "./Pages/LoanBig" 
import LoanSmall from "./Pages/LoanSmall"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chats from './Pages/Chats';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
      <Route path="/" element ={<Home/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/signin" element ={<Signin/>}/>
        <Route path="/userplatform" element ={<Dashboard/>}/>
        <Route path="/profileB" element ={<ProfileBig/>}/> 
        <Route path="/loanbig" element = {<LoanBig/>}/>
        <Route path="/loansmall" element = {<LoanSmall/>}/>
        <Route path="/chats" element = {<Chats/>}/>
      </Routes>
    </Router>
    


    </div>
  );
}

export default App;
