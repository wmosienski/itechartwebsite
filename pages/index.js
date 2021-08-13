import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { defaultTheme } from 'itechartsitewrapper';

export default class extends Component {
  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
      </ThemeProvider>
    );
  }
}