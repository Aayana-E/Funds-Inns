import React, {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {login} from '../api/auth'
import {useNavigate} from 'react-router-dom'

function Signin(){
    
    const [user, setUser] = React.useState(true)
    
    const navigate = useNavigate()

    const inputChangeHandler = (event) => {
        console.log('13', event.target.name, event.target.value);
        setUser((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    useEffect(()=> {
console.log(user);
    }, [user])

    const submitHandler = () => {
        login(user, navigate)
    }

    return(
        <div className="Login">
        <h1>Login</h1>
            {/* <form className="mt-3" > */}
                <div className="Login-form">
                    <label>
                        Email:
                    </label>
                    <input name="email" type ="text" onChange={inputChangeHandler}/>
                </div>
                <div className="Login-form">
                    <label>Password:

                    </label>
                    <input name="password"   type="password" className="form-control" onChange={inputChangeHandler}   style={{width:"300px", height: "25px"}}/>
                </div>
                <button type ="submit" className="btn btn-primary" onClick={submitHandler}>Login</button>
            {/* </form> */}

        </div>
        
    )

};

export default Signin