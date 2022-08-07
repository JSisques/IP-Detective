import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react'
import "./CountryContainer.css"

export default function CountryContainer({data}) {
  return (
    <>
        <div className='country-container'>
            <h2 className="country-container-title">Country info</h2>
            <div className="country-container-info">
                <h3 className='contry-title'>{data.flag.emoji} {data.name} {data.flag.emoji}</h3>
            </div>
        </div>
    </>
  )
}

/*
  "country": {
    "geonameid": 6252001,
    "name": "United States of America",
    "code": "US",
    "capital": "Washington",
    "area_size": "9629091.00 sq. km",
    "population": 327167434,
    "phone_code": "1",
    "is_in_eu": false,
    "languages": {
      "en": "English language",
      "es": "Spanish language",
      "haw": "Hawaiian language",
      "fr": "French language"
    },
    "flag": {
      "file": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg",
      "emoji": "🇺🇸",
      "unicode": "U+1F1FA U+1F1F8"
    },
    "tld": ".us"
  }
*/