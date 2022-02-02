import React,{useEffect, useState}  from 'react';
import { LoaderSpan } from '../styles/LoaderSpan.styled';
import { Loading_animation } from '../styles/Loading_animation';
import axios from 'axios';
const Gazetteer = () =>{
  let data = {
    "api_name": "countryBorders"
  }
  const [loading, setLoading] = useState(true);
  const [countryName, setCountryName] = useState('');

  useEffect(()=>{
   navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    axios
  .get("http://localhost:3000/php/getApi.php",{api_name: "countryBorders"}
  ,{
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    // manipulate the response here
    console.log(response)
})
.catch(function(error) {
    // manipulate the error response here
});
  })

  return (
          <>
            {loading && 
            <>
              <LoaderSpan>Loading...</LoaderSpan>
              <Loading_animation endDeg="360deg"/>
              <Loading_animation endDeg="-360deg"/>
            </>
     }
          </>
  );
}

export default Gazetteer;
