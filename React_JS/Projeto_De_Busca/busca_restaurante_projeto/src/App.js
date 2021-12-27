import './App.css';
import Home from './pages/Home';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'
import theme from './theme';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;