import React from 'react'
import './tipBox.css'

const TopBox = ({data}) => {
  return (
    <div className='boxContainer'>
          <div className='imgDiv'><img src={data.img} /></div>
          <div className='title'>{data.title}</div>
          <div className='numbers'>{data.numbers}</div>
    </div>
  )
}

export default TopBox