import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from "./Styles/GlobalStyles";

// import './Styles/common.scss';
// import './Styles/reset.scss';
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