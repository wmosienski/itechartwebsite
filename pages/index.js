import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { defaultTheme } from 'itechartsitewrapper';
import SiteHeader from '../components/SiteHeader';

export default class extends Component {
  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <SiteHeader />
        {[...Array(40)].map(() => (
          <div>content</div>
        ))}
      </ThemeProvider>
    );
  }
}