import React, { useState } from 'react'
import Input from './Input/Input'
import './Form.css'
import Button from './Button/Button'
import DisplayData from '../DisplayData/DisplayData'
import CountryContainer from '../Container/CountryContainer/CountryContainer'
import Card from '../Card/Card'
import Slider from '../Slider/Slider'

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
        <Input labelText="IP Address" placeholder="Write an IP address" hint="For example: 192.168.1.2" onChange={function (e) { getInputValue(e) }} />
        <Button text="Retrieve data!" primary={true} handleMethod={function (e) { fetchApi(false) }} />
        <Button text="Get info my IP" handleMethod={function (e) { fetchApi(true) }} />
        <Slider />
        <Card/>
            {data != '' ? <DisplayData hidden={false} data={JSON.stringify(data, null, 2)} /> : <DisplayData hidden={true} data={JSON.stringify(data, null, 2)} />}
      </div>
    </>
  )
}

/*
<CountryContainer data={data.country} />
* */