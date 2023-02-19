import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

//images
import Logo from "../Images/logo-black.png";
import Person from "../Images/person.jpeg";
import Startup from "../Images/Startup.png";
import Tech from "../Images/Tech.png"
import Finance from "../Images/Finance.png"
import Health from "../Images/health.jpg";

//pages
import Login from "../Pages/signin";
import Register from "../Pages/register";
import About from "../Pages/about";

function Home() {
  const heading = "Seek To Give";
  const heading2 = "Great To Recieve";
  const heading3 = "Boost Business";

  const words = heading.split(" ");
  const words2 = heading2.split(" ");
  const words3 = heading3.split(" ");

  words[0] = (
    <span>
      {words[0]}&nbsp;
    </span>
  );
  words[1] = (
    <span>
      {words[1]}&nbsp;
    </span>
  );
  words[2] = (
    <span style={{ color: "green" }}>
      {words[2]}&nbsp;
    </span>
  );

  words2[0] = (
    <span>
      {words2[0]}&nbsp;
    </span>
  );
  words2[1] = (
    <span>
      {words2[1]}&nbsp;
    </span>
  );
  words2[2] = (
    <span style={{ color: "green" }}>
      {words2[2]}&nbsp;
    </span>
  );

  words3[1] = (
    <span style={{ color: "green" }}>
      {words3[1]}&nbsp;
    </span>
  );
  words3[0] = (
    <span>
      {words3[0]}&nbsp;
    </span>
  );
  words3[2] = (
    <span>
      {words3[2]}&nbsp;
    </span>
  );

  return (
    <div className="Home">
      <NavBar />
      <div className="Home" style={{ paddingTop: "50px" }}>
        <div className="Info">
          <h1> {words}</h1>
          <h1>{words2}</h1>
          <h1>{words3}</h1>

          <p className="HeadingText">
            Provides you with a great way to grow your online business
          </p>
          <Link to="/Register">
            <Button variant="success" size="lg">
              Register
            </Button>{" "}
          </Link>
          <Link to="/signin">
            <Button variant="outline-success" size="lg">
              Sign In
            </Button>{" "}
          </Link>
        
          <div className="HomeImg">
            <div className="circle-img-box">
              <div className="loading-circle"></div>
              <p className="CompanyAmt">5K companies</p>
            </div>
            
            <img
              src={Person}
              alt="Person coding"
              className="circle-img"
            ></img>
          </div>
          <div className="CategoryBoxes">
            <div className="CategoryBox">
              <img src={Startup} alt="Startup" className="CategoryImg"></img>
              <p className="CategoryText">Startups</p>
              
            </div>
            <div className="CategoryBoxes">
              <div className="CategoryBox">
                <img src={Tech} alt="Tech" className="CategoryImg"></img>
                <p className="CategoryText">Tech</p>
                
              </div>
            </div>
            <div className="CategoryBoxes">
              <div className="CategoryBox">
                <img src={Finance} alt="Finance" className="CategoryImg"></img>
                <p className="CategoryText">Finance</p>
                
              </div>
            </div>

            <div className="CategoryBoxes">
              <div className="CategoryBox">
                <img src={Health} alt="Health" className="CategoryImg" style={{ width: "80px", height: "65px" , marginTop:"-15px"}}></img>
                <p className="CategoryText">Health</p>
                
              </div>
            </div>
            
           

          </div>


          
        </div>
      </div>
    </div>
  );
}

export default Home;
