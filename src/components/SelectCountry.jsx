import React from "react";

import { StyledSelect } from "./styles/StyledSelect.styled";
const SelectCountry = ({ handleChange }) => {
  return (
    <StyledSelect
      id="countrySelect"
      name="countrySelect"
      onChange={handleChange}></StyledSelect>
  );
};

export default SelectCountry;
