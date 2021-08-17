import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { defaultTheme, LinkAlignedWithIcon } from 'itechartsitewrapper';
import SiteHeader from '../components/SiteHeader';
import dot from '../assets/images/dot.svg';

export default class extends Component {
  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <SiteHeader />
        {[...Array(4)].map(() => (
          <div>content</div>
        ))}
            <LinkAlignedWithIcon 
              text='How we work'
              position='down'
              size={10}
              isLinkActive={true}
              icon={dot.src}
              onMouseEnter={() => {}}
              fontSize={24}
              fontWeight={400}
              textTransform='inherit'
              color='#868686'
              colorOnHover='#FFFFFF'
            />
        {[...Array(40)].map(() => (
          <div>content</div>
        ))}
      </ThemeProvider>
    );
  }
}