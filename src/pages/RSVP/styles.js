import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #9abadb;
  padding-bottom: 10rem;
`;

export const NavbarContainer = styled.div`
  justify-content: center;
  display: flex;
  height: 90px;
  width: 100%;
  padding: 0 24px;
  margin-bottom: 20px;
`

export const NavLogo = styled(LinkR)`
display: flex;
align-items: center;
  margin-top: 30px;
`

export const Img = styled.img`
  width: 9rem;
  
  @media screen and (max-width: 768px){
    padding-top: 0;
  }
`;

