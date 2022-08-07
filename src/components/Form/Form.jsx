import React, { useState } from 'react'
import Input from './Input/Input'
import './Form.css'
import Button from './Button/Button'
import DisplayData from '../DisplayData/DisplayData'
import WebManager from '../../model/WebManager'

export default function Form() {

  const [data, setData] = useState([])

  function fetchApi() {
    const url = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json"

    const OPTIONS = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f34cf7772cmshe1c5070c23c3ce6p1fc2b3jsn48b66dc9e734',
        'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
      }
    }

    return fetch(url, OPTIONS)
      .then(res => {
        var json = res.json()
        console.log(json)
        setData({data: json})
      })
      .catch(err => console.error('error:' + err));
  }

  return (
    <>
      <div className="form-container">
        <Input labelText="IP Adress" placeholder="Write an IP address" hint="For example: 192.168.1.2" />
        <Button text="Retrieve data!" handleMethod={function (e) {fetchApi() }} />
          <pre>
            {JSON.stringify(data[0])}
          </pre>
      </div>
    </>
  )
}
