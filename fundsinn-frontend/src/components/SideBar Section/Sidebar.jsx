import React from 'react'
import './sidebar.css' 

// Imported Icons ======>
import {IoMdSpeedometer} from 'react-icons/io'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src="" alt="Image Name" />
        <h2>Planti.</h2>
      </div>
    
      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className="icon"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
