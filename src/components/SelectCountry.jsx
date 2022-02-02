import React from "react";

import { StyledSelect } from "./styles/StyledSelect.styled";
const SelectCountry = ({}) => {
  return (
    <StyledSelect
      id="countrySelect"
      name="countrySelect"
      onChange={console.log("Hello")}></StyledSelect>
  );
};

export default SelectCountry;
