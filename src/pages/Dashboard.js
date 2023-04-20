import React from "react"
import Header from "../Components/shared/Header"
import { Outlet } from "react-router-dom"
import './styles/Dashboard.css'
import Sidebar from "../Components/shared/Sidebar"
import toast from 'react-hot-toast';


const Dashboard = () => {
  return (
    <div className="mainContainer">
      <div className="leftSide"><Sidebar/></div>
      <div className="rightSide">
        <Header/>

          
          <div className="topBoxes">{<Outlet/>}</div>
      </div>
    </div>
  )
}

export default Dashboard
