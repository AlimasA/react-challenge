import React from "react";
import SelectCountry from "./SelectCountry";
import { StyledHeader } from "./styles/StyledHeader.styled";
import Container from "./styles/Container";
const Header = ({ handleChange }) => {
  return (
    <StyledHeader>
      <Container>
        <SelectCountry handleChange={handleChange} />
      </Container>
    </StyledHeader>
  );
};

export default Header;
