import React from 'react'
import "./Card.css"

export default function Card(props) {
    return (
        <>
            <div className="card-container">
                <h3 className="card-title">{props.title}</h3>
                <div className="card-divider"></div>
            </div>
        </>
    )
}
