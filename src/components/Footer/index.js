import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    Title,
    Title2,
    TextLink,
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
            <Title> Contact Us:  </Title>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <Title2>Bonn: </Title2>
                            <TextLink href="tel:+4746819218">+47 468 19 218</TextLink>
                            <TextLink href="mailto:bonnaarsheim@hotmail.com">bonnaarsheim@hotmail.com</TextLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                           <Title2>Eivin: </Title2>
                            <TextLink href="tel:+4747319640">+47 473 29 640</TextLink>
                            <TextLink href="mailto:sellevold_92@hotmail.com">sellevold_92@hotmail.com</TextLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> 
                </FooterLinksContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer