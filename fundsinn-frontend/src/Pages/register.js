import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
import {register} from '../api/auth'
import { sRegister } from "../api/auth";
import {useNavigate} from 'react-router-dom'
//import "../miscellaneous/Register.css"
function Register(){

    const [user, setUser] = React.useState(true)

    const [company, setCompany] = React.useState(true)


    const navigate = useNavigate()
    
    const inputChangeHandler = (event) => {
        console.log('Testing:', event.target.name, event.target.value);
        setUser((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const inputChangeHandlerCompany = (event) => {
        console.log('Testing:', event.target.name, event.target.value);
        setCompany((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

  

    const submitHandler = () => {
        register(user, navigate)
    }

    const submitHandlerCompany = () => {
        sRegister(company, navigate)
    }




return(
    
    <div className="Register">
        
    <Tabs 
        defaultActive="CompanyRegister"
        id = "justify-tab-example"
        className="mb-3"
        justify
        >
    <Tab eventKey="Corporation" title="Corporation">
        Corporation Register
        <br></br>
        <form>
            <div className = "register-form">
                <label htmlFor="Email" className="email-label">Email</label>
                <input name="email" type="email" className="email" id="email" placeholder="test@email.com" onChange={inputChangeHandler} />
            </div>
            <div className="register-from">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" className="password" id="password" placeholder="password123" onChange={inputChangeHandler } ></input>
            </div>

            <div className="register-form">
                <label htmlFor="CompanyName">Company Name</label>
                <select name="companyName" className ="Company-Name" id="Company-Name" onChange={inputChangeHandler}>
                    <option selected>Company Name</option>
                    <option value="1">Google</option>
                    <option value="2">Microsoft</option>
                    <option value="3">Meta</option>
                    <option value="4">Other</option>
                </select>
            </div>

            <div className="register-form">
                <label htmlFor="CompanyIncome">Income</label>
                <input name="income" type ="number" min="0" step="1000" className="Company Income" id="CompanyIncome" placeholder="Income" onChange={inputChangeHandler}></input>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
        </form>

    </Tab>
    <Tab eventKey="Company Register" title="Company Register">
    <br></br>
    Small Company Register
        <form>
            <div className = "register-form">
                <label htmlFor="Email">Email</label>
                <input type="email" className="email" id="email" placeholder="test@email.com" onChange={inputChangeHandlerCompany} />
            </div>
            <div className="register-from">
                <label htmlFor="password">Password</label>
                <input type="password" className="password" id="password" placeholder="password123" onChange={inputChangeHandlerCompany}></input>
            </div>
            <div className="register-form">
                <label htmlFor="CorporationName">Corporation Name</label>
                <select className ="CorporationName" id="CorporationName" onChange={inputChangeHandlerCompany}>
                    <option selected>Company Name</option>
                    <option value="1">Google</option>
                    <option value="2">Microsoft</option>
                    <option value="3">Meta</option>
                    <option value="4">Other</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitHandlerCompany}>Submit</button>
        </form>

    </Tab>
    
    
    </Tabs>
        
        

    </div>
);

};



export default Register