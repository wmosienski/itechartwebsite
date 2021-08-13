import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Hamburger, Logo, Divider, defaultTheme } from 'itechartsitewrapper';

export default class extends Component {
  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
          <Hamburger color='red' />
          <Logo />
          <Divider />
      </ThemeProvider>
    );
  }
}