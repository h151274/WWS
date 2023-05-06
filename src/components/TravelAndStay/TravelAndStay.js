import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TextWrapper,
    TravelTextWrapper,
    TopLine,
    SecondHeading,
    Heading,
    Subtitle,
    FlightSubtitle,
    IconWrapper,
    Link,

} from './styles'

import {Location} from '@styled-icons/entypo/Location'
import {AirplaneTicket} from '@styled-icons/material-outlined/AirplaneTicket'
import PictureSection from "../PictureSection";
import {infoSectionObjTwo} from "../PictureSection/Data";



const TravelAndStay = () => {
    return (
        <>
            <InfoContainer id='Travel'>
                <InfoWrapper>
                    <TopLine>
                        We recommend to start looking for flights 6 months before departure. Note that the different airlines put their tickets on sale at different times.
                        If you look at tickets early the options might be limited and really expensive.
                        The best trick is to check in regularly and see what options there are or set the notification bell on Momondo so you get notified.
                        We also recommend to find a flight from Norway to Bangkok first and then look for flights from Bangkok to Koh Samui.
                    </TopLine>
                    <InfoRow >
                            <TravelTextWrapper>
                                <SecondHeading>Norway - Thailand</SecondHeading>
                                <FlightSubtitle>
                                    Bangkok has two international airports. <br/>
                                    The one you will be flying to is <b>Suvarnabhumi Airport</b>. <br/><br/>
                                    The best route from Bergen is Bergen-Amsterdam-Bangkok with KLM. <br/>
                                    Flying from Oslo gives you more options.
                                    It´s worth checking flights from Oslo to Bangkok and then buy tickets from your city to Oslo on it´s own.
                                </FlightSubtitle>
                                <IconWrapper href="https://momondo.no" target="_blank">
                                    <AirplaneTicket size={50}/>
                                    <p>Link to Momondo</p>
                                </IconWrapper>
                            </TravelTextWrapper>
                            <TravelTextWrapper>
                                <SecondHeading>Bangkok - Koh Samui</SecondHeading>
                                <FlightSubtitle>
                                    There is two main ways to get to Koh Samui: <br/>
                                    <b>1. </b>Direct flight from Suvarnabhumi airport with Bangkok Airlines. <br/>
                                    <b>2. </b>Fly to Surat Thani and take the buss and ferry over to the island. <br/> <br/>
                                    Flying directly to Koh Samui is much more expensive than flying to other destinations in Thailand. Bangkok Airline owns the Airport in Samui which
                                    allows them to charge whatever they want for the ticket. Althought the price is higher we would still recommend flying with them. <br/><br/>
                                    If you feel adventures and would like to save som monitos at the same time, ask Bonn how you can travel option 2. She did this in April 2023 and have the details you need.
                                </FlightSubtitle>
                            </TravelTextWrapper>
                    </InfoRow>
                </InfoWrapper>
                <PictureSection {...infoSectionObjTwo} />

                <InfoWrapper>
                    <TopLine>
                        <Heading> Silavadee Pool Spa Resort </Heading>
                        This is the resort where Eivin decided to propose to Bonn, and she said yes!
                        Silavadee holds a special place in our hearts and we are looking forwards to go back with all our loved ones to tie the knot.
                        The resort is idyllically located along the coast, away from noise and commotion, and it even has its own private beach." Check out the website silavadeeresort.com for more info.</TopLine>
                    <InfoRow >
                            <TextWrapper>
                                <SecondHeading>Silavadee Pool Spa Resort</SecondHeading>
                                <Subtitle>We will stay at the resort from Friday 29. March to Sunday 31. March.
                                    All our guests will get a special room rate when booking a minimum 2-night stay.
                                    If you would like to stay at the resort with us go to <Link color='black' href="https://www.silavadeeresort.com/" target="_blank"> Silavadee Resort </Link> to book your rooms. <br/>
                                    Enter the promo code <b>WD300324 </b> for a discount.</Subtitle>
                                <IconWrapper href="https://www.google.com/maps/place/Silavadee+Resort/@9.4677636,100.0681815,17z/data=!4m9!3m8!1s0x3054f3f946766181:0xd7698fa314f6f2a0!5m2!4m1!1i2!8m2!3d9.4677583!4d100.0707564!16s%2Fg%2F11xc_vcc8" target="_blank">
                                    <Location size="48"/>
                                </IconWrapper>
                            </TextWrapper>
                        <TextWrapper>
                            <SecondHeading>Other Recommendations</SecondHeading>
                            <Subtitle>If you do not wish stay at Silavadee, Cinnamon Beach Villas is a great alternative only 5 minute walk away.</Subtitle>
                            <IconWrapper href="https://www.google.com/maps/place/Cinnamon+Villas/@9.469352,100.0661098,17z/data=!3m1!4b1!4m9!3m8!1s0x3054f215ff5d7ac5:0x1a3d3f241e0f3047!5m2!4m1!1i2!8m2!3d9.4693467!4d100.0686847!16s%2Fg%2F1vh8mgcy" target="_blank">
                                <Location size="48"/>
                            </IconWrapper>                        </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}
export default TravelAndStay