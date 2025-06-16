import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import Completed from './components/Completed.jsx'
import Setting from './components/Setting.jsx'
import Tasks from './components/Tasks.jsx'
import SideBar from './components/SideBar.jsx'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Dashboard/>
    <Completed/>
    <Tasks/>
   <SideBar/>
    <Setting/>
    </BrowserRouter>
  </StrictMode>,
)
