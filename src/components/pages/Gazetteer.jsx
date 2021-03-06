import React, { useEffect, useState } from "react";
import { LoaderSpan } from "../styles/LoaderSpan.styled";
import { Loading_animation } from "../styles/Loading_animation";
import axios from "axios";
import Header from "../Header";
import $ from "jquery";
// import Map from "../Map";

const Gazetteer = ({
  country,
  changeCountry,
  loading,
  setLoading,
  location,
  setMyLocation,
}) => {
  const handleChange = ({ target }) => {
    if (target.value !== null || target.value !== "") {
      console.log("selected ");
    }
    let select = $("#countrySelect option:selected").text();

    changeCountry(select);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // setMyLocation(position.coords.latitude, position.coords.longitude);
      console.log(location);
    });

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
      .then(setLoading(true));
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
      <Header handleChange={handleChange}></Header>
      <h1>Country Selected: {country}</h1>
      {/* <Map></Map> */}
      <a href="https://andriusalimas.co.uk/project1/">
        <h4>Go To Project</h4>
      </a>
    </>
  );
};

export default Gazetteer;
