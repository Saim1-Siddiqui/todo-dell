
import { useState } from 'react'
import React from 'react'
import {NavLink} from "react-router-dom";
import {BrowserRouter,Router,Routes,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from './components/Header';
import Completed from './components/Completed'
import Setting from './components/Setting'
import Tasks from './components/Tasks'

function App() {
  
    

  return (
    
    <div className="app-container">
    
      <div className="main-content">
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes>
        
      </div>
    </div>
 
    
  )
}

export default App

