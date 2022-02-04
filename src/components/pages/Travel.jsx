import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "../shared/Card";
import { Container } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";

const Travel = ({ country, changeCountry }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      $("#btnVideo").text("Clear");
      $("#btnVideo").css("disabled", true);
      console.log("is playing");
    }
  }, [playing]);

  const handleChange = ({ target }) => {
    changeCountry(target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setPlaying(true);

    const url = "http://localhost:80/php/getApi.php";
    // send a POST request
    axios({
      method: "post",
      url: url,
      data: {
        api_name: "youtube",
        country: encodeURIComponent(country),
      },
    }).then((response) => {
      let video = response["data"].data.items[0].id.videoId;

      $("#video").append(
        `<iframe src="https://www.youtube.com/embed/${video}?autoplay=1&controls=0&version=3&enablejsapi=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`
      );
      $("#video").css("height", "60vh");
    });
  };
  return (
    <>
      <Container>
        <Card reverse>
          <p>Choose Where you want to go?</p>
          <input
            type="text"
            placeholder={country}
            onChange={handleChange}
            value={country}
          />
          <Button
            id="btnVideo"
            variant="danger"
            className="mx-auto m-3"
            onClick={handleClick}>
            GO
          </Button>
          <div id="video"></div>
        </Card>
      </Container>
    </>
  );
};

export default Travel;
