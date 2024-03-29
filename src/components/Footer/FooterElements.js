import styled from "styled-components";

export const FooterContainer = styled.footer`
background-color: #101522;
`

export const FooterWrapper = styled.div`
padding: 48px 24px;
justify-content: left;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
display: flex;
justify-content: left;
flex-direction: column;


@media screen and(max-width: 820px){
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 480px) {
    flex-direction: column;

}


`
export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
text-align: left;
box-sizing: border-box;
color: #fff;
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
    color: #dbbb9a;
  transition: ease-out 0.2s;
}
`




