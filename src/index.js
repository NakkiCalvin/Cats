import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AppRouter from './router';
import './index.css';
import theme from './theme';
import configureStore from './redux/configureStore';

const store = configureStore();

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
