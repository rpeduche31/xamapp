import { extendTheme } from '@chakra-ui/react';

const colors = {
  blue: {
    700: '#1428a0',
    600: '#3993dd',
    500: '#51e5ff',
    400: '#91e5f6',
    300: '#b1e5f2',
    200: '#adfcf9',
    100: '#e2fdff',
  },
  gray: {
    800: '#666666',
    700: '#888888',
    600: '#999999',
    500: '#aaaaaa',
    400: '#cccccc',
    300: '#dddddd',
    200: '#eeeeee',
    100: '#fcfcfc',
  },
  green: '#99edcc',
  yellow: '#ffc857',
  red: '#ff858d',
  pink: '#ffd4d4',
  black: '#000',
  white: '#fff',
};

export default extendTheme({ colors });
