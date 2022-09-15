import React from 'react'
import '../dist/css/SearchForm.css'
import {useNavigate} from 'react-router-dom';

function SearchForm() {

  const navigate = useNavigate();

  const handleSubmit = (e) =>{

    e.preventDefault();
    const cityName = document.getElementById('val').value;
    
    navigate(`/searchresult/${cityName}`)
  }

  return (
    <>

        <form onSubmit={handleSubmit}>
            <input type="text" id='val' placeholder='City Name' onChange={(e)=>e.target.value}></input>
        </form>

    </>
  )
}

export default SearchForm