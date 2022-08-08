import React from 'react'
import "./Label.css"

export default function Label(props) {
    var text = props.text
    var size = props.size
    var tag;

    if (size === "small") {
        tag = <span className='label-element small'>{text}</span>
    } else if (size === "medium") {
        tag = <span className='label-element medium'>{text}</span>
    } else if (size === "big") {
        tag = <span className='label-element big'>{text}</span>
    }else if (size === "extra-small") {
        tag = <span className='label-element extra-small'>{text}</span>
    }

    return (
        <>
            <div className="label-container">
                {tag}
            </div>
        </>
    )
}
