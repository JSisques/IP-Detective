import React from 'react'
import "./Button.css"

export default function Button(props) {
  return (
    <>
    <div className="button-container">
        <button className={props.primary ? 'button-element' : 'button-element secondary'} onClick={props.handleMethod}>
          {props.text}
        </button>
    </div>
    </>
  )
}
