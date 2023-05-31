import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const FrontContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
padding: 0 30px;
height: 1000px;
position: relative;
z-index: 1;
`;

export const FrontBg = styled.div`
position: absolute;
top: 0;
right:0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const HeaderImage = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`;

export const FrontContent = styled.div`
  z-index: 3;
  margin-top: 10rem;
  text-align: center;
  
  @media screen and (max-width: 768px){
    margin-top: 15rem;
  }
`;

export const TextLogoImage = styled.img`
width: 45%;
-o-object-fit: cover;
object-fit: cover;
  
  @media screen and (max-width: 768px){
    width: 70%;
  }

  @media screen and (max-width: 480px){
    width: 100%;
  }
`;

export const FrontP = styled.p`
color: #fff;
font-size: 24px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 20px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`;
export const NavBtn = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 6rem;
    cursor: pointer;
    color: #fff;
  }
`

export const MobileNavBtnContainer = styled.div `
  margin-top: 3rem
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #fff;
white-space: nowrap;
padding: 10px 30px;
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




