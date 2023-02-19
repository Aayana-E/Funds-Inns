const bcrypt = require('bcrypt');
const CorporateRep = require('../models/CorporateRep')
const Corporation = require('../models/Corporation')
const SmallCompany = require('../models/SmallCompany')

//const CompanyRep = mongoose.model('')
//....

const register = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const companyName = req.body.companyName
  console.log(email, password, companyName);
  CorporateRep.findOne({email:email}).then(async (err, foundUser) => {
    if (err) {
      console.log(err);
      res.json({status: 'user exists'})
    } else {
        try{
          const user = await CorporateRep.create({email, password, companyName})
          res.json({status: "registered"})
        } catch (e){
          res
          .status(401)
          .json({success: false, message: 'User with this name already exists!'});
        }
        
    }
  })
  
}

const sRegister = async (req, res) =>{
  console.log("in reghincin")
  const email = req.body.email
  const pass = req.body.password
  const companyName = req.body.corporationname
  SmallCompany.findOne({email: req.body.email}).then(async (userFound, err) => {
    if(err){
      console.log(err)
      res.json({status: "user exists"})
    }else{
      try{
        const newUser = await SmallCompany.create({ email,pass, companyName })
        newUser.save((err,result) =>{
          if(err){
            console.log(err)
          }else{
            console.log(result)
          }
        })
        res.json({status:"user created"})
      }catch(err){ 
        res.status(401).json({success:false, message: "User Already Exits"})
      }
    }
  })
}



const login = async (req, res) => {
  const corporateRep = await CorporateRep.findOne({email:req.body.email});
  console.log(corporateRep);
  if(corporateRep){
    if (req.body.password === corporateRep.password){
      console.log(corporateRep)
      res.json({status: "logged in", corporate: true, corporateRep: corporateRep});
    } 
    else{
      return res.status(400).json({status:"Invalid  Email or Password"});
    }
  }
  else {
    return res.status(400).json({status:"Invalid  Email or Password"});
  }


};

const getLoans = (req, res) => {
  const companyName = req.body.companyName
  Corporation.findOne({companyName: companyName}).then( async (foundCorp, err) => {
    if (err){
      console.log(err);
    } else{
      res.json({loans: foundCorp.loans})
    }
  })
}

const saveloan = async (req,res) =>{
  // const description = req.body.description
  // const loan = req.body.amount
  console.log('here76');
  // console.log(req.body.companyName);
  Corporation.findOne({companyName:req.body.companyName}).then( async (foundCorp, err) => {
    if (err) {
      console.log(err);
      console.log('81');
      res.json({status: "err"})
    } 
    if (foundCorp){
      console.log("found corp83")
      console.log('body.loan', req.body.name);
      console.log(foundCorp);
      console.log('title', req.body.title);
      const loan = {
        title: req.body.title,
        desc: req.body.desc,
        amt: req.body.amt
      }
      foundCorp.loans.push(loan)
        await foundCorp.save()
        res.json({status: "Loan added"})
    }
  })

}


exports.login = login;
exports.register = register;
exports.saveloan = saveloan;
exports.sRegister = sRegister;
