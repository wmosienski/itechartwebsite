import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Hamburger, Logo, Divider, defaultTheme, LinkAlignedWithIcon, LinkWrapper, LinkArrow, MenuSubLinks, MenuLinkList } from 'itechartsitewrapper';
import arrow from '../assets/images/arrow.svg';
import MENU_LINKS from '../mocks/MENU_LINKS';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { isLinkActive: false };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline /> 
      </ThemeProvider>
    );
  }
}