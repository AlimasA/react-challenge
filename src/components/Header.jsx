import React from "react";
import SelectCountry from "./SelectCountry";
import { StyledHeader } from "./styles/StyledHeader.styled";
import Container from "./styles/Container";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <SelectCountry />
      </Container>
    </StyledHeader>
  );
};

export default Header;
