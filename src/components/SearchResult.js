import { useParams, useNavigate } from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import '../dist/css/SearchResult.css'



function SearchResult() {

    const navigation = useNavigate();
    const {cityName} = useParams();
    const [temps,setTemps] = useState([]);
    const [forecast,setForecast] = useState([]);

    
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ffe7d342f6d3e17670cfd95c181ccac5`)
        .then(res=>res.json())
        .then((data) => {
            setTemps(data.main);
        })
        .catch((err)=>{
            navigation(`/noresult/${cityName}`)
        })
    },[])
    

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ffe7d342f6d3e17670cfd95c181ccac5`)
        .then(response => response.json())
        .then((content) => {
            
            setForecast(content.list)
        })
    },[])

    

  return (
    <React.Fragment>

        <section className='weather-info-banner'>
            
            <h1 className='title'>{cityName}</h1>

            <div className='weather-info-container'>

                <div className='card'>
                    <h3>Temperature </h3>
                    <h1>{Math.round( temps.temp - 273.15)+ "°C"}</h1>
                </div>

                <div className='card'>
                    <h3>Maximum </h3>
                    <h1>{Math.round(temps.temp_max - 273.15)+ "°C"}</h1>
                </div>

                <div className='card'>
                    <h3>Minimum </h3>
                    <h1>{Math.round(temps.temp_min - 273.15)+ "°C"}</h1>
                </div>

                <div className='card'>
                    <h3>Feels Like</h3>
                    <h1>{Math.round(temps.feels_like - 273.15)+ "°C"}</h1>
                </div>

                <div className='card'>
                    <h3>Pressure (hPa)</h3>
                    <h1>{temps.pressure}</h1>
                </div>

                <div className='card'>
                    <h3>Humidity</h3>
                    <h1>{temps.humidity}%</h1>
                </div>
                
            </div>
        </section>

        <section className='forecast'>
            <h1 className='title'>FORECAST</h1>
            
            <div className='forecast-container'>
                {   

                    forecast.slice(0,5).map((fore)=>{

                        return (
                            <div className='forecast-card'>
                                
                                <div className='forecast-text'>
                                    <h1 className='f-main'>{fore.weather[0].main}</h1>
                                    <h3>{fore.weather[0].description}</h3>
                                    <h1 className='f-temp'>{Math.round(fore.main.temp-275.15) + "°C"}</h1>
                                    <h4>High: {Math.round(fore.main.temp_max - 275.15)+ "°C"}</h4>
                                    <h4>Low: {Math.round(fore.main.temp_min - 275.15)+ "°C"}</h4>
                                </div>
                                
                            </div>
                        )
                    })
                }

            </div>
        </section>

    </React.Fragment>
  )
}

export default SearchResult