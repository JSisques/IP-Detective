import React from 'react'
import Card from '../Card/Card'
import "./Slider.css"

export default function Slider(props) {
  var hidden = props.hidden
  return (
    <>
        <div className={hidden ? "slider-container hidden" : "slider-container"}>
            <div className="slider-child"><Card title="Country"/></div>
            <div className="slider-child"><Card title="Example"/></div>
            <div className="slider-child"><Card title="Country"/></div>
        </div>
    </>
  )
}
