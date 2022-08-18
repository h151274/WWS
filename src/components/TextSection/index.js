import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
  
} from './TextElements'

const TextSection = ({ id, topLine, headline1, description1, headline2, description2}) => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <TopLine>{topLine}</TopLine>
                    <InfoRow >
                        <Column1>
                            <TextWrapper>
                                <Heading>{headline1}</Heading>
                                <Subtitle>{description1}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <TextWrapper>
                                <Heading>{headline2}</Heading>
                                <Subtitle>{description2}</Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}
export default TextSection