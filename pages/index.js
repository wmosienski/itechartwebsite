import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Hamburger, Logo, Divider, defaultTheme, LinkAlignedWithIcon, LinkWrapper, LinkArrow, MenuSubLinks, MenuLinkList } from 'itechartsitewrapper';
import arrow from '../assets/images/arrow.svg';
import MENU_LINKS from '../mocks/MENU_LINKS';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { isLinkActive: false };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseEnter() {
        this.setState(prevState => {
            return {
                ...prevState,
                isLinkActive : !prevState.isLinkActive
            }
        })
    }

  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
          <Hamburger color='red' />
          <Logo />
          <Divider />
          <div style={{background: 'black', height: '30vh'}}>
              <LinkAlignedWithIcon
                  text="Link with icon"
                  icon={arrow.src}
                  size={40}
                  fontSize={50}
                  fontWeight={800}
                  colorOnHover="red"
                  color="pink"
                  position="down"
                  isLinkActive={this.state.isLinkActive}
                  onMouseEnter={this.handleMouseEnter}
                  onClick={() => console.log('test onclick linkAlignedWithIcon')}
              />
          </div>
          <LinkWrapper
              text="link wrapper"
              fontSize={100}
              color="green"
              colorOnHover="yellow"
              textTransform="uppercase"
              onClick={() => console.log('test on click')}
              onMouseEnter={() => console.log('test on mouse enter')}
          />
          <div style={{background: 'black', height: '100vh'}}>
              <MenuSubLinks
                  subtitle="jakis subtitle"
                  route="someRoute"
                  color="yellow"
                  colorOnHover="green"
                  fontSize={35}
                  fontWeight={400}
              />
              <MenuLinkList
                  mocks={MENU_LINKS}
              />
          </div>
      </ThemeProvider>
    );
  }
}