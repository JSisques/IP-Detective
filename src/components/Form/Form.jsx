import React, { useState } from 'react'
import Input from './Input/Input'
import './Form.css'
import Button from './Button/Button'
import DisplayData from '../DisplayData/DisplayData'

export default function Form() {

  const [data, setData] = useState('')
  const [inputValue, setInputValue] = useState('')

  function fetchApi() {
    const url = "https://ip-geo-location.p.rapidapi.com/ip/" + inputValue + "?format=json"
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
        setData(JSON.stringify(json, null, 2))
      })
      .catch(err => console.error('error:' + err));
  }

  function getInputValue(e){
    var input = e.target.value
    setInputValue(input)
  }

  return (
    <>
      <div className="form-container">
        <Input labelText="IP Address" placeholder="Write an IP address" hint="For example: 192.168.1.2" onChange={function(e){getInputValue(e)}} />
        <Button text="Retrieve data!" handleMethod={function (e) { fetchApi() }} />
        <DisplayData data={data}/>
      </div>
    </>
  )
}
