import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#000000' : 'transparent')};
height: 90px;
margin-top: -90px;
display: flex; 
justify-content: center; 
align-items: center;
font-size: 1.5rem; 
position: sticky; 
top: 0; 
z-index: 10;


@media screen and (max-width: 960px) { 
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between; 
height: 90px; 
z-index: 1;
width: 100%;
padding: 0 24px;
//max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
color: #fff; 
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
`

export const Img = styled.img`
  width: 6rem;
  
  @media screen and (max-width: 768px){
    padding-top: 0;
  }
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute; 
    top: 0; 
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none; 
}
`

export const NavItem = styled.li`
height: 90px;
`

export const NavLinks = styled(LinkScroll)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer; 

&.active {
    border-bottom: 3px solid #EFE1D2;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #fff;
white-space: nowrap;
padding: 10px 20px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(255, 255, 255, .4);
}
`

