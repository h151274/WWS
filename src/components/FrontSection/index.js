import React from 'react';
import {
    FrontContainer,
    FrontBg,
    FrontH1,
    FrontP,
    FrontContent,
    HeaderImage
} from './FrontElements';
import headerImage from '../../images/sand.jpg'

const FrontSection = () => {
    return (
        <FrontContainer id="home">
            <FrontBg>
                <HeaderImage src={headerImage} alt="headerImage"/>
            </FrontBg>
            <FrontContent>
                <FrontH1> Bonn & Eivin  </FrontH1>
                <FrontP>July 4-6, 2024 · Koh Samui, Thailand </FrontP>
            </FrontContent>
        </FrontContainer>
    )
}

export default FrontSection