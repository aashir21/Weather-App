import React from 'react'
import {useParams} from 'react-router-dom'

import '../dist/css/NoResult.css'

function NoResult() {

    const {city} = useParams();

  return (
    <div className='noresult-banner'>
        <div className='noresult-con'>
            <h1>No Result Found For "{city}"</h1>
            <a href='/'><button>Go Back</button></a>
        </div>
    </div>
  )
}

export default NoResult