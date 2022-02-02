import styled from "styled-components";
import { Rotate } from "../keyframes/Rotate.animate";

export const Loading_animation = styled.span`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid;
  border-left-color: #10ac84;
  border-top-color: #ff9f43;
  border-right-color: #0984e3;
  border-bottom-color: #d63031;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -100px 0 0 -100px;
  
  animation: ${Rotate} 6s;
  animation-iteration-count: infinite;
`

