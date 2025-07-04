import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import Header from './components/Header.jsx'
import Completed from './components/Completed.jsx'
import Setting from './components/Setting.jsx'
import Tasks from './components/Tasks.jsx'
import SideBar from './components/SideBar.jsx'
import { BrowserRouter } from 'react-router'
import './style/style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <App />
    <Dashboard/>
    <Completed/>
    <Tasks/>
   <SideBar/>
    <Setting/>
    </BrowserRouter>
  </StrictMode>,
)
