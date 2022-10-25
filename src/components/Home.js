import React, {useState} from 'react'
import '../dist/css/Home.css'
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';


function Home() {

  const [flag,setFlag] = useState(0)
  var longitude=0,latitude=0;

  const successfulCallback = (position) =>{

    setFlag(1);
    
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  
  }

  const error = (error) =>{
    setFlag(0);
  }

  navigator.geolocation.getCurrentPosition(successfulCallback,error);


  return (
    
    <React.Fragment>
      {
        flag ? <SearchResult lat={toString(latitude)} lon={toString(longitude)}></SearchResult> : (
          (
            <div className='hero'>
                <div className='hero-container'>
                    <div className='hero-text'>
                        <h1>Find out what it's like outside.</h1>
                        <p>Check the weather real quick before you pop out. Know if it's raining or the sun's out shining.
                          Fancy a trip later? Check the forecast before you plan.
                        </p>
                    </div>
                </div>
            </div>
          )
        )
      }
    </React.Fragment>    

  )
}

export default Home