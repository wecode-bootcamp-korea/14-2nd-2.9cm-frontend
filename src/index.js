import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './Styles/GlobalStyles';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Theme from './Styles/theme';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Theme>
        <Routes />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
