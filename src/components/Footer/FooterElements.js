import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
background-color: #101522;
`

export const FooterWrapper = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
display: flex;
justify-content: left;


@media screen and(max-width: 820px){
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and(max-width: 820px){
    flex-direction: column;
}
`
export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-right: 40px;
width: 100%;
text-align: left;
box-sizing: border-box;
color: #fff;

@media screen and(max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`

export const Title = styled.h1`
font-size: 20px;
margin-bottom: 16px;
color: #fff;
text-align: left;
`
export const Title2 = styled.h1`
font-size: 18px;
color: #fff;
text-align: left;
`
export const TextLink = styled.a `
font-size: 16px;
text-align: left;
color: #fff;
&:hover {
    color: #EFE1D2;
    transition: 0.3 ease-out;
}
`




