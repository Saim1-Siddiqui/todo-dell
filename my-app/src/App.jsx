import React from "react";
import Dashboard from "./components/Dashboard.jsx";  
import Sidebar from "./components/SideBar.jsx";      
import "./style/style.css";                          

function App() {
  return (
    <Sidebar>
      <Dashboard />
    </Sidebar>
  );
}

export default App;

