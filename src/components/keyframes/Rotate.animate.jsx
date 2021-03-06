import { keyframes } from 'styled-components';

export const Rotate = ({endDeg})=>keyframes`
 0%{
    transform: rotate3d(1, 1, 1, 0deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, ${endDeg});
    /* transform: rotate3d(1, 1, 1, 360deg); */
  }
`;