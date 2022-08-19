import React from 'react';
import {
    InfoContainer,
    TextContent,
    SectionImage,
    SectionH1,
    SectionP,
    InfoBg,
} from './PictureSectionElements';

const PictureSection = ({id, headline, description,img, alt }) => {
    return (
        <>
            <InfoContainer id ={id}>
                <InfoBg>
                    <SectionImage src={img} alt={alt} />
                </InfoBg>
                <TextContent>
                    <SectionH1> {headline} </SectionH1>
                    <SectionP>{description}</SectionP>
                </TextContent>
            </InfoContainer>
        </>
    )
}
export default PictureSection