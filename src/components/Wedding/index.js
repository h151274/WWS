import React from 'react'
import bilde1 from '../../images/umberella.jpg'
import bilde2 from '../../images/sign.jpg'
import bilde3 from '../../images/sand.jpg'
import { TopLine } from '../InfoSection/InfoElements'

import {
    WeddingContainer,
    WeddingH1,
    WeddingWrapper,
    WeddingCard,
    WeddingPicture,
    WeddingH2,
    WeddingTopLine,
    WeddingP
} from './weddingInfo'

export const WeddingInfo = () => {
    return (

        <WeddingContainer id="Wedding">
            <WeddingH1>Please join us from March 29–30, 2024 as we celebrate our wedding in Koh Samui, Thailand.</WeddingH1>
                <TopLine>Tropical Casual</TopLine>
                <WeddingWrapper>
                    <WeddingCard>
                        <WeddingPicture src={bilde1} />
                        <WeddingH2>Thai morning Ceremony</WeddingH2>
                        <WeddingTopLine>4:00PM / 16.00</WeddingTopLine>
                        <WeddingP>Sun deck at Hotel Silavadee Pool Spa Resport. 208/66 Ko Samui District, Surat Thani 84310, Thailand  </WeddingP>
                    </WeddingCard>
                    <WeddingCard>
                        <WeddingPicture src={bilde2} />
                        <WeddingH2>Ceremony</WeddingH2>
                        <WeddingTopLine>4:00PM / 16.00</WeddingTopLine>
                        <WeddingP>Sun deck at Hotel Silavadee Pool Spa Resport. 208/66 Ko Samui District, Surat Thani 84310, Thailand  </WeddingP>
                    </WeddingCard>
                    <WeddingCard>
                        <WeddingPicture src={bilde3} />
                        <WeddingH2>Reception</WeddingH2>
                        <WeddingTopLine>4:00PM / 16.00</WeddingTopLine>
                        <WeddingP>Sun deck at Hotel Silavadee Pool Spa Resport. 208/66 Ko Samui District, Surat Thani 84310, Thailand  </WeddingP>
                    </WeddingCard>
                </WeddingWrapper>           
        </WeddingContainer>

    )
}
