import { createGlobalStyle } from "styled-components";
import RubikLighWoff from "../fonts/Rubik-Light.woff";
import RubikLighWoff2 from "../fonts/Rubik-Light.woff2";
import RubikMediumWoff from "../fonts/Rubik-Medium.woff";
import RubikMediumWof2 from "../fonts/Rubik-Medium.woff2";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Rubik';
  src: url(${RubikLighWoff2}) format('woff2'),
       url(${RubikLighWoff}) format('woff');
  font-weight: 300;
}
@font-face {
  font-family: 'Rubik';
  src: url(${RubikMediumWof2}) format('woff2'),
       url(${RubikMediumWoff}) format('woff');
  font-weight: 500;
}

body{ 
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 15px;
  margin: 0;
  background-color: #000;
  color: #E0E0E0;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
