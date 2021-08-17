import React, { useState } from 'react';
import { SiteHeader, Hamburger, Logo, HeaderLinkDotted, MenuLinkList, WithScrolled, Box } from 'itechartsitewrapper';
import MENU_LINKS from '../mocks/MENU_LINKS';

const SiteHeaderExample = ({ scrolled, ...siteHeaderProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
      <SiteHeader
          shouldBeVisible={scrolled}
          isOpen={isOpen}
          leftNodes={[<Logo key="logo" />]}
          rightNodes={[
            <Box px={5}><HeaderLinkDotted text='How we work' /></Box>,
            <Box px={5}><HeaderLinkDotted text='Blog' /></Box>,
            <Box px={5}><HeaderLinkDotted text='Portfolio' /></Box>,
            <Box px={5}><HeaderLinkDotted text='About us' /></Box>,
            <Box px={5}><Hamburger key="hamburger" color="red" onClick={toggleOpen} /></Box>
          ]}
          {...siteHeaderProps}
      >
        <Box pt={2}>
          <MenuLinkList 
            mocks={MENU_LINKS}
          />
        </Box>
      </SiteHeader>
  );
};

export default WithScrolled(SiteHeaderExample);