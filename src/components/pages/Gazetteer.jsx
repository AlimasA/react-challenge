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
  const headers= {
        'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
    // Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("./getApi.php",{
            "api_name": "countryBorders"
          })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  useEffect(()=>{
   navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

//     axios
//   .get("http://localhost:3000/php/getApi.php",{api_name: "countryBorders"}
//   ,headers).then(response => {
//     // manipulate the response here
//     console.log(response)
// })
// .catch(function(error) {
//     // manipulate the error response here
// });
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
