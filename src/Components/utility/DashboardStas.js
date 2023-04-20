import React from 'react'
import TopBox from './topBox';
import '../../pages/styles/Dashboard.css'
const DashboardStas = () => {
  return (
    
    <div className='topBoxes'>
    <div className='box' id='box1'><TopBox data={{img:"./revenue.png", title:"Total Revenue", numbers:"$ 2,109,980"}} /></div>
    <div className='box' id='box2'><TopBox data={{img:"./transactions_black.png", title:"Total Transactions", numbers:"1,520"}} /></div>
    <div className='box' id='box3'><TopBox data={{img:"./likes.png", title:"Total Likes", numbers:"9,721"}} /></div>
    <div className='box' id='box4'><TopBox data={{img:"./users.png", title:"Total Users", numbers:"892"}} /></div>
  </div>
  )
}


export default DashboardStas
