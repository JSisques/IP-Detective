import React from 'react'
import "./Input.css"

export default function Input(props) {
    return (
        <>
            <div className="input-container">
                <div className="input-container-label">
                    <h3 className='input-label'>{props.labelText}</h3>
                </div>
                <input className='input-element' type="text" placeholder={props.placeholder} onChange={props.onChange}/>
                <div className="input-container-hint">
                    <small className="input-hint">{props.hint}</small>
                </div>
            </div>
        </>
    )
}
