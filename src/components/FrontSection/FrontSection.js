import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
    FrontContainer,
    FrontBg,
    FrontP,
    FrontContent,
    HeaderImage,
    MobileNavBtnContainer,
    TextLogoImage,
} from './styles';
import headerImage from '../../images/header.jpg'
import txtLogoImage from '../../images/B&E.png'
import RsvpButton from "../RSVPButton/RsvpButton";

const FrontSection = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <FrontContainer id="home">
            <FrontBg>
                <HeaderImage src={headerImage} alt="headerImage"/>
            </FrontBg>
            <FrontContent>
                <TextLogoImage src={txtLogoImage}></TextLogoImage>
                <FrontP>30th March 2024 · Koh Samui, Thailand </FrontP>
                {isMobile && (
                <MobileNavBtnContainer>
                    <RsvpButton/>
                </MobileNavBtnContainer>
                )}
            </FrontContent>
        </FrontContainer>
    )
}

export default FrontSection