import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #7799a5;
`;

export const FormIframe = styled.iframe`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  border: none;
`;

export const Icon = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 5rem;
  font-family: 'Tangerine', cursive;
  margin-top: 5rem;
  display: inline-block;
`;

