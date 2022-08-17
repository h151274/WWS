import React from 'react'
import {FaBars} from 'react-icons/fa'
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>B & E</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="ourStory"> Our Story </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover"> Details </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="registry"> Registry </NavLinks>
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
