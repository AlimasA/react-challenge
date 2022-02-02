import React, { useEffect, useState } from "react";
import { LoaderSpan } from "../styles/LoaderSpan.styled";
import { Loading_animation } from "../styles/Loading_animation";
import axios from "axios";
import Header from "../Header";
import $ from "jquery";
import Card from "../shared/Card";
// import Map from "../Map";

const Gazetteer = () => {
  const [loading, setLoading] = useState(true);
  const [countryName, setCountryName] = useState("");
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocation({
        latitude: position.coords.latitude,
        longitude: 5,
      });
    });

    console.log(location);

    const url = "http://localhost:80/php/getApi.php";
    // send a POST request
    axios({
      method: "post",
      url: url,
      data: {
        api_name: "countryBorders",
      },
    })
      .then(
        (response) => {
          response["data"].data.features.forEach((feature) => {
            $("<option>", {
              value: feature.properties.iso_a2,
              text: feature.properties.name,
            }).appendTo("#countrySelect");
          });
        },
        (error) => {
          console.log(error);
        }
      )
      .then(setLoading(false));
  }, []);

  return (
    <>
      {loading && (
        <>
          <LoaderSpan>Loading...</LoaderSpan>
          <Loading_animation endDeg="360deg" />
          <Loading_animation endDeg="-360deg" />
        </>
      )}
      <Header bg="red"></Header>
      {/* <Map></Map> */}
      <a href="https://andriusalimas.co.uk/project1/">
        <h4>Go To Project</h4>
      </a>
    </>
  );
};

export default Gazetteer;
