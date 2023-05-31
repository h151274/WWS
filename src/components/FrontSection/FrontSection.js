import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
    FrontContainer,
    FrontBg,
    FrontP,
    FrontContent,
    HeaderImage,
    MobileNavBtnContainer,
    NavBtnLink,
    TextLogoImage,
} from './styles';
import headerImage from '../../images/header.jpg'
import txtLogoImage from '../../images/B&E.png'

const FrontSection = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <FrontContainer id="home">
            <FrontBg>
                <HeaderImage src={headerImage} alt="headerImage"/>
            </FrontBg>
            <FrontContent>
                <TextLogoImage src={txtLogoImage}></TextLogoImage>
                <FrontP>March 30, 2024 · Koh Samui, Thailand </FrontP>
                {isMobile && (
                <MobileNavBtnContainer>
                    <NavBtnLink to='/rsvp'>RSVP</NavBtnLink>
                </MobileNavBtnContainer>
                )}
            </FrontContent>
        </FrontContainer>
    )
}

export default FrontSection