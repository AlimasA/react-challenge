import React from "react";
import Card from "../shared/Card";
import Container from "../styles/Container";
const About = () => {
  return (
    <Container>
      <Card reverse>
        <h1>About Page</h1>
        <br></br>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:6894989802379239424"
          height="679"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"></iframe>
        <p>
          <strong>Thank you Dedalus that they welcome me very warm.</strong>
        </p>
      </Card>
    </Container>
  );
};

export default About;
