import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { defaultTheme } from 'itechartsitewrapper';
import SiteHeader from '../components/SiteHeader';

export default class extends Component {
  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
        <SiteHeader />
        {[...Array(100)].map(() => (
          <div>content</div>
        ))}
      </ThemeProvider>
    );
  }
}