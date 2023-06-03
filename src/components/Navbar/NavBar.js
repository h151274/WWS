import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  Img, NavBtn
} from './styles'
import logoWhite from "../../images/logoWhite.png";
import RsvpButton from "../RSVPButton/RsvpButton";
import {useMediaQuery} from "react-responsive";

const Navbar = ({toggle}) => {
const [scrollNav, setScrollNav] = useState(false);

const changeNav =()=> { 
  if(window.scrollY >= 80){
    setScrollNav(true)
  } else { 
    setScrollNav(false)
  }
}

  useEffect(()=> { 
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome  = () => {
    scroll.scrollToTop();
  }
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/home' onClick={toggleHome}>
            <Img src={logoWhite} alt={"logoWhite"} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Wedding" smooth={true} duration={500} spy={true} exact='true' offset={-90}> Wedding Details </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Travel" smooth={true} duration={500} spy={true} exact='true' offset={-90}> Travel</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Stay" smooth={true} duration={500} spy={true} exact='true' offset={-90}>Where to Stay</NavLinks>
            </NavItem>
          </NavMenu>
          {!isMobile && <NavBtn> <RsvpButton/></NavBtn>}
        </NavbarContainer>
      </Nav>
    </>

  )
}

export default Navbar;
