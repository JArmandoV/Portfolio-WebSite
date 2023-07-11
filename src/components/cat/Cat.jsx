import React from 'react'
import './cat.css'

function Cat() {
  return (
  <div className="container sm:left-1/4 md:left-1/3 lg:left-1/2 ">
    <div className="kitty">
      <div className="face">
        <div className="ear"></div>
        <div className="eye"></div>
        <div className="mouth">
          <div className="nose"></div>
          <div className="whisker-1"></div>
          <div className="whisker-2"></div>
        </div>
        <div className="body">
          <div className="hand">
            <div className="hand-l"></div>
            <div className="hand-r"></div>
          </div>
        </div>
        <div className="tail"></div>
      </div>
      <div className="laptop">
        <div className="logo"></div>
      </div>
    </div>
  </div>
  )
}

export default Cat