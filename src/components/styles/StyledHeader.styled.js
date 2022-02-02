import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  margin: 20 auto;
  text-align: center;
  padding: 10;
  z-index: 100;
  background-color: ${(props) => props.bg};
`;
