import React from 'react'
import Form from '../components/Form/Form'
import Slider from '../components/Slider/Slider'
import "./Home.css"

export default function Home() {
    return (
        <>
            <div className="home-container">
                <br />
                <Form />
                <Slider hidden={false}/>
            </div>
        </>
    )
}
