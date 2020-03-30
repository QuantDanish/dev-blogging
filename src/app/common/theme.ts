import * as React from 'react';

const white = 'rgb(255, 255, 255)';
const black = 'rgb(0,0,0)';


const theme = {
  light:  {
      background: white,
      foreground: black
  },
  dark: {
    background: black,
    foreground: white
  }
};

const themeContext = React.createContext(theme.dark );
themeContext.displayName = "ThemeContext";

export {
  theme,
  themeContext
};
