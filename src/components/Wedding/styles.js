import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const WeddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-bottom: 40px;
`;
export const WeddingWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  padding: 0 50px;

  @media screen and (max-width: 764px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    grid-gap: 0;

  }
`;
export const WeddingCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-width: 550px;
  width: 100%;
  height: 100%;
  padding: 35px;
  text-align: center;

`;

export const WeddingPicture = styled.img`
  width: 100%;
  margin-bottom: 20px;
  transition: 0.2s ease-in-out;

`;

export const WeddingH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin: 64px;
  text-align: center;

  @media screen and (max-width: 480px){
    font-size: 2rem;
}
`;

export const WeddingH2 = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const WeddingTopLine = styled.p`
  color: #000;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


export const WeddingP = styled.p`
  font-size: 20px;
  text-align:center;
`;

export const ToastmasterWrapper = styled.div`
  max-width: 1000px;
  margin: 5rem auto;
  text-align: center;
  grid-gap: 10px;
  padding: 0 50px;

  @media screen and (max-width: 764px){
    padding: 0 20px;
  }
`;

export const TextLink = styled.a `
  font-size: 16px;
  text-align: left;
  color: #000;
  margin-left: 10px;
  overflow: auto;
  
  &:hover {
    color: #dbbb9a;
    transition: ease-out 0.2s;
}
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #dbbb9a;
  white-space: nowrap;
  padding: 10px 20px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 20px;
  

&:hover {
    transition: all 0.2s ease-in-out;
    background-color: rgba(219, 187, 154, 0.5);}
`
