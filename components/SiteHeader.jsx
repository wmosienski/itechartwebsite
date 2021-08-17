import React, { useState } from 'react';
import { SiteHeader, Hamburger, Logo, HeaderLinkDotted } from 'itechartsitewrapper';
import WithScrolled from 'itechartsitewrapper/dist/core/helpers/WithScrolled/';
import MenuLinkList from 'itechartsitewrapper/dist/core/MenuLinkList';
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
            <HeaderLinkDotted text='How we work' />,
            <HeaderLinkDotted text='Blog' />,
            <HeaderLinkDotted text='Portfolio' />,
            <HeaderLinkDotted text='About us' />,
            <Hamburger key="hamburger" color="red" onClick={toggleOpen} />
          ]}
          {...siteHeaderProps}
      >
        <MenuLinkList 
          mocks={MENU_LINKS}
        />
      </SiteHeader>
  );
};

export default WithScrolled(SiteHeaderExample);