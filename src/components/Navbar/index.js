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
  NavBtn,
  NavBtnLink
} from './NavbarElements'

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


  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/home' onClick={toggleHome}>B & E</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Wedding" smooth={true} duration={500} spy={true} exact='true' offset={-90}> Wedding Details </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Travel" smooth={true} duration={500} spy={true} exact='true' offset={-90}> Travel & Stay</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ToDo" smooth={true} duration={500} spy={true} exact='true' offset={-90}> What to do</NavLinks>
            </NavItem>                  
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/rsvp'>RSVP</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
        
      </Nav>
    </>

  )
}

export default Navbar;
