import styled from "styled-components";

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


