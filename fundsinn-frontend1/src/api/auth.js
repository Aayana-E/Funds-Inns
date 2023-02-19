import backend from './entry'
import axios from 'axios'

const login = (user, navigate) => {
    console.log(user);
    backend.post('/auth/login', user).then(response => {
        console.log(response.data);
        localStorage.setItem("email", response.data.corporateRep.email)
        localStorage.setItem("corporate", "true")
        localStorage.setItem("companyName", response.data.corporateRep.companyName)
        navigate('/userPlatform')
    })
}

const register = (user, navigate) =>{
    console.log(user);
    backend.post('/auth/register', user).then(response =>{
        console.log(response);
        if (response.data === "user exists"){
            console.log("user exists response");
        } else{
        navigate('/userPlatform')
        }
    })
}


const saveLoan = (loan, companyName, navigate) =>{
    console.log(loan);
    backend.post('/auth/saveloan', {title: loan.name, desc: loan.descripton, amt: loan.amount, companyName}).then(response =>{
        console.log("in?")
        window.location = '/profileB'
    }) 
}

const sRegister = (user, navigate) =>{
    backend.post('/auth/sregister', user).then(response =>{
        console.log("small company registered")
        navigate('/userPlatform')
    })
}

const getLoans = (companyName) => {
    backend.get('/auth/get')
}
export {login, register, saveLoan, sRegister};