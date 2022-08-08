import React from 'react'
import Card from '../Card/Card'
import "./Slider.css"

export default function Slider() {
  return (
    <>
        <div className="slider-container">
            <div className="slider-child"><Card title="Country"/></div>
            <div className="slider-child"><Card title="Example"/></div>
            <div className="slider-child"><Card title="Country"/></div>
            <div className="slider-child"><Card title="Country"/></div>
            <div className="slider-child"><Card title="Country"/></div>
            <div className="slider-child"><Card title="Country"/></div>
            <div className="slider-child"><Card title="Country"/></div>
            <div className="slider-child"><Card title="Country"/></div>
        </div>
    </>
  )
}
