import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from "./Styles/GlobalStyles";
import Routes from './Routes';
import Theme from "./Styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
    <Routes />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);