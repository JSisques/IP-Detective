import React from 'react'
import "./Input.css"

export default function Input(props) {
    return (
        <>
            <div className="input-container">
                <input className='input-element' type="text" placeholder={props.placeholder} onChange={props.onChange}/>
            </div>
        </>
    )
}
