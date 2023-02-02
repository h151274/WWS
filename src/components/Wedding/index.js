import React from 'react'
import bilde1 from '../../images/ceremony1.jpg'
import bilde2 from '../../images/ceremony3.jpg'
import bilde3 from '../../images/ceremony2.jpg'
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
            <WeddingH1>Please join us on March 30, 2024 as we celebrate our wedding in Koh Samui, Thailand.</WeddingH1>
                <TopLine>Tropical Casual</TopLine>
                <WeddingWrapper>
                    <WeddingCard>
                        <WeddingPicture src={bilde1} />
                        <WeddingH2>Thai morning Ceremony</WeddingH2>
                        <WeddingTopLine>00:00PM / 00.00</WeddingTopLine>
                        <WeddingP>Name of Hotel or Venue. District, The rest of the Adress, Thailand  </WeddingP>
                    </WeddingCard>
                    <WeddingCard>
                        <WeddingPicture src={bilde2} />
                        <WeddingH2>Ceremony</WeddingH2>
                        <WeddingTopLine>00:00PM / 00.00</WeddingTopLine>
                        <WeddingP>Name of Hotel or Venue. District, The rest of the Adress, Thailand   </WeddingP>
                    </WeddingCard>
                    <WeddingCard>
                        <WeddingPicture src={bilde3} />
                        <WeddingH2>Reception</WeddingH2>
                        <WeddingTopLine>00:00PM / 00.00</WeddingTopLine>
                        <WeddingP>Name of Hotel or Venue. District, The rest of the Adress, Thailand  </WeddingP>
                    </WeddingCard>
                </WeddingWrapper>           
        </WeddingContainer>

    )
}
