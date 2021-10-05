import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {AnimatedSwitch} from 'react-router-transition';

//import  store  from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <BrowserRouter>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 1 }}
            atActive={{ opacity: 1 }}
          >
            <Route exact path='/' component={Homepage} />
            <Route exact path='/home' component={Homepage} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

export { App };
