import React from 'react'
import '../dist/css/Home.css'
import SearchForm from './SearchForm';


function Home() {

  const hours = new Date().getHours();
  const banner = document.getElementById('banner') 

  

  let title = " ";

  if(hours >= 5 && hours <= 12){
    title = "Good Morning"
  }
  else if(hours >= 13 && hours <= 16 ){
    title = "Good Afternoon"
  }
  else if(hours>= 17 && hours <= 19){
    title = "Good Evening"
  }
  else{
    title = "Hello There"
  }
  

  return (
    <div className='banner' id='banner'>
          <div className='banner-greeting'>
            <h2>{title},</h2>
          </div>
        <div className='banner-container'>
          
          <div className='banner-text'>
            <h1>SEARCH A CITY</h1>
            <p>Search Your City And Know The Weather And Forecast.</p>
            <SearchForm></SearchForm>
            
          </div>
        </div>
    </div>

  )
}

export default Home