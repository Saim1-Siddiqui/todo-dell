import React from 'react'
import {NavLink} from "react-router-dom";
import { FaHome, FaTasks, FaCheckCircle, FaCog } from 'react-icons/fa'


function SideBar() {
  return (
    <div>
    <div className="sidebar">
        <h2 className='logo'>My App</h2>
        <nav>
            <NavLink to='/' className="link" activeclassName='active'> <FaHome className="icon" />Dashboard</NavLink>
            <NavLink to='/Tasks' className='link' activeclassName='active'> <FaTasks className="icon" />tasks</NavLink>
            <NavLink to='/Completed' className='link' activeclassName='active'><FaCheckCircle className="icon" />completed</NavLink>
            <NavLink to='Setting' className='link' activeclassName='active'><FaCog className="icon" />setting</NavLink>
 
            
        </nav>

        
    </div>
         
    </div>
  )
}

export default SideBar
