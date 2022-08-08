import React, { useState } from 'react'
import Input from './Input/Input'
import './Form.css'
import Button from './Button/Button'
import DisplayData from '../DisplayData/DisplayData'
import CountryContainer from '../Container/CountryContainer/CountryContainer'
import Card from '../Card/Card'
import Slider from '../Slider/Slider'
import Label from '../Label/Label'

export default function Form() {

  const [data, setData] = useState('')
  const [inputValue, setInputValue] = useState('')

  console.log(data)

  function fetchApi(myIp) {
    const url = myIp ? "https://ip-geo-location.p.rapidapi.com/ip/check?format=json" : "https://ip-geo-location.p.rapidapi.com/ip/" + inputValue + "?format=json";
    //const url = "https://ip-geo-location.p.rapidapi.com/ip/" + inputValue + "?format=json"
    //const url = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json"

    const OPTIONS = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f34cf7772cmshe1c5070c23c3ce6p1fc2b3jsn48b66dc9e734',
        'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
      }
    }

    return fetch(url, OPTIONS)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setData(json)
      })
      .catch(err => console.error('error:' + err));
  }

  function getInputValue(e) {
    var input = e.target.value
    setInputValue(input)
  }

  return (
    <>
      <div className="form-container">
        <form action="" method="get">
        <Label text="IP Address" size="medium"/>
        <Input placeholder="Write some IP..."/>
        <Label text="For example: 56.234.1.98" size="extra-small"/>
        <br />
        <div className="form-button-container">
          <Button primary={false} text="Search my own IP"/>
          <Button primary={true} text="Search!"/>
        </div>
        </form>
      </div>
    </>
  )
}

/*
<CountryContainer data={data.country} />
* */