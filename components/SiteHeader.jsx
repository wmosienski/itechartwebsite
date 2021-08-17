import React, { useState } from 'react';
import { SiteHeader, Hamburger, Logo } from 'itechartsitewrapper';
import WithScrolled from 'itechartsitewrapper/dist/core/helpers/WithScrolled/';
import LinkAlignedWithIcon from 'itechartsitewrapper/dist/core/LinkAlignedWithIcon';
import dot from '../assets/images/dot.svg';

const SiteHeaderExample = ({ scrolled, ...siteHeaderProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
      <SiteHeader
          shouldBeVisible={scrolled}
          isOpen={isOpen}
          leftNodes={[<Logo key="logo" />]}
          rightNodes={[
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
            />,
            <Hamburger key="hamburger" color="red" onClick={toggleOpen} />
          ]}
          {...siteHeaderProps}
      />
  );
};

export default WithScrolled(SiteHeaderExample);