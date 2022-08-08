import React from 'react'
import "./DisplayData.css"

export default function DisplayData(props) {
  return (
    <>
      <div className={props.hidden ? 'display-data-container hidden' : 'display-data-container'}>
        <pre className='display-data-pre'>
          {props.data}
        </pre>
      </div>
    </>
  )
}
