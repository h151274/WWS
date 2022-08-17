import React from 'react';
import sectionImage from '../../images/gdansk.jpg'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    PictureBg,
    TextContent,
    SectionImage,
    TextWrapper,
    SectionH1,
    SectionP,
} from './pictureSection'

const PictureSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper >
                    <SectionImage src={sectionImage} alt="sectionImage" />
                    <TextContent>
                        <SectionH1> Bonn & Eivin  </SectionH1>
                        <SectionP>July 4-6, 2024 · Koh Samui, Thailand </SectionP>
                    </TextContent>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
export default PictureSection