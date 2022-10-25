import { useParams, useNavigate } from 'react-router-dom'
import React, {useEffect,useReducer} from 'react'
import '../dist/css/SearchResult.css'
import { ACTION, INITIAL_STATE, reducer } from '../reducer';



function SearchResult(props) {

    const [state, dispatch] = useReducer(reducer,INITIAL_STATE)

    //lat=52.399448 lon=0.259790, api=ffe7d342f6d3e17670cfd95c181ccac5

    useEffect(()=>{

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=52.399448&lon=0.259790&appid=ffe7d342f6d3e17670cfd95c181ccac5`)
        .then(res=>res.json())
        .then((data) => {
            console.log(data);
            dispatch({type:ACTION.NAME, payload:data.name})
            dispatch({type:ACTION.SET_TEMPERATURE, payload:data.main})
            dispatch({type:ACTION.SET_WEATHER, payload:data.weather[0]})
        })
        
    },[])

    


  return (
    <React.Fragment>
      <div className='banner' id='banner'>

          <h1 className='cityName'>{state.name}</h1>
          
          <div className='banner-container'>
            
            <div className='banner-card'>

              <div className='weather-desc'>
                <img src={`http://openweathermap.org/img/wn/${state.weather.icon}@2x.png`} loading="lazy"></img>
                <h4>{state.weather.description}</h4>
              </div>

              <div className='temps'> 
                  <h1>{Math.round(state.temperature.temp - 273.15)}°C</h1>

                  <h2>Feels Like: {Math.round(state.temperature.feels_like - 273.15)}°C</h2>

                  <h3>High: {Math.round(state.temperature.temp_max - 273.15)}°C</h3>
                  <h3>Low: {Math.round(state.temperature.temp_min - 273.15)}°C</h3>
              </div>

            </div>
  
            <div className='banner-card'>
                <div className='card-info'>
                    <div className='info-holder'>
                      <h1>Pressure</h1>
                      <p>{state.temperature.pressure} Pa</p>
                    </div>

                    <div className='info-holder'>
                      <h1>Humidity</h1>
                      <p>{state.temperature.humidity}%</p>
                    </div>
                </div>
            </div>
  
            <div className='banner-card'>
                <div className='forecast-info'>
                    <h1 className='forecast-title'>Forecast</h1>
                    
                </div>
            </div>
  
          </div>
  
          
      </div>
    </React.Fragment>
  )
}

export default SearchResult