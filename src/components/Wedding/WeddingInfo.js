import React from 'react'
import bilde1 from '../../images/ceremony1.jpg'
import bilde2 from '../../images/ceremony3.jpg'
import bilde3 from '../../images/ceremony2.jpg'

import {
    WeddingContainer,
    WeddingH1,
    WeddingWrapper,
    WeddingCard,
    WeddingPicture,
    WeddingH2,
    WeddingTopLine,
    WeddingP,
    ToastmasterWrapper,
    TextLink, NavBtnLink,
} from './styles'

export const WeddingInfo = () => {
    return (

        <WeddingContainer id="Wedding">
            <WeddingH1>Please join us on 30th March, 2024 as we celebrate our wedding in beautiful Koh Samui, Thailand.</WeddingH1>
            <WeddingTopLine>Dress code: Beach Casual/Beach Cocktail</WeddingTopLine>

            <NavBtnLink to='/rsvp'> RSVP by 30th November </NavBtnLink>


            <WeddingWrapper>
                    <WeddingCard>
                        <WeddingPicture src={bilde1} />
                        <WeddingH2>Ceremony</WeddingH2>
                        <WeddingTopLine>15.30 - 16.30</WeddingTopLine>
                        <WeddingP> Private Beach at Silavadee Pool Spa Resort, Koh Samui.</WeddingP>
                    </WeddingCard>
                    <WeddingCard>
                        <WeddingPicture src={bilde2} />
                        <WeddingH2>Champagne Hour</WeddingH2>
                        <WeddingTopLine>16.30 - 18.30</WeddingTopLine>
                        <WeddingP> Private Beach at Silavadee Pool Spa Resort, Koh Samui.</WeddingP>
                    </WeddingCard>
                    <WeddingCard>
                        <WeddingPicture src={bilde3} />
                        <WeddingH2>Wedding Dinner</WeddingH2>
                        <WeddingTopLine>19.00</WeddingTopLine>
                        <WeddingP>The Star Resturant at Silavadee Pool Spa Resort, Koh Samui.  </WeddingP>
                    </WeddingCard>
                </WeddingWrapper>

            <ToastmasterWrapper>
            <WeddingH2>Toastmasters</WeddingH2>
            <WeddingP> We are delighted to introduce our toastmasters, Arisa and Hanne. <br/>
                Arisa, a dear friend of the bride,
                is fluent in English, Norwegian and Thai, making it easy for
                our guests from Thailand to fully participate in the festivities. Meanwhile, Hanne,
                the groom's aunt, will create a cozy and familiar atmosphere for all the
                Norwegians with her fluency in Norwegian and English. Together, they make the perfect
                team to ensure a memorable and enjoyable celebration for everyone. <br/><br/>
                To schedule a speech, please contact our toastmasters: <br/>
                <b>Arisa: </b>
                <TextLink href="tel:+4746786117">+47 467 86 117</TextLink>
                <TextLink href="mailto:arisaseljestokken@gmail.com">arisaseljestokken@gmail.com</TextLink> <br/>
                <b>Hanne:</b>
                <TextLink href="tel:+4797648633">+47 976 48 633</TextLink>
                <TextLink href="mailto:Hannedyvik@hotmail.com">hannedyvik@hotmail.com</TextLink>
            </WeddingP>
        </ToastmasterWrapper>
        </WeddingContainer>

    )
}
