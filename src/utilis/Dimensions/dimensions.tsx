import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import { Dimensions } from "react-native";

const height = responsiveHeight;
const width = responsiveWidth;
const font = responsiveFontSize;

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export {height,width,font,windowWidth,windowHeight}