import React, { useState } from 'react';
import { SiteHeader, Hamburger, Logo } from 'itechartsitewrapper';
import WithScrolled from 'itechartsitewrapper/dist/core/helpers/WithScrolled/';

const SiteHeaderExample = ({ scrolled, ...siteHeaderProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
      <SiteHeader
          shouldBeVisible={scrolled}
          isOpen={isOpen}
          leftNodes={[<Logo key="logo" />]}
          rightNodes={[<Hamburger key="hamburger" color="red" onClick={toggleOpen} />]}
          {...siteHeaderProps}
      />
  );
};

export default WithScrolled(SiteHeaderExample);