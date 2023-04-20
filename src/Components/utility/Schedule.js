import React from 'react'
import  './Schedule.css'

const Schedule = () => {
  return (
    <div className='mainContainer'>
        <div className='headingContainer'>
            <div className='heading'>Today's Schedule</div>
            <div className='seeAll' style={{cursor:"pointer"}}>See all ›</div>
        </div>
       
       <div className='meeting1'>
            <div className='title'>Meeting with suppliers from Kuta Bali</div>
            <div className='time'>14:00 - 15:00</div>
            <div className='place'>At sunset road, Kuta Bali</div>
       </div>
       <div className='meeting2'>
            <div className='title'>Check operation at GIGA Factory 1</div>
            <div className='time'>18:00 - 20:00</div>
            <div className='place'>At Central Jakarta</div>
       </div>
        
    </div>
  )
}

export default Schedule