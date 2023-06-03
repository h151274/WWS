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
    Link, RoomTypeWrapper
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
                                    There are two main ways to get to Koh Samui: <br/>
                                    <b>1. </b>Direct flight from Suvarnabhumi airport with Bangkok Airlines (the only airline flying to Koh Samui). <br/>
                                    <b>2. </b>Fly to Surat Thani, take the buss to the pier and then take the ferry over to the island. <br/> <br/>
                                    Option one is more expensive than option two, but it´s more convenient and saves you a lot of time. <br/><br/>
                                    If you feel adventures and would like to save some money at the same time, ask Bonn how you can travel option 2. She did this in April 2023 and has the details you need.
                                </FlightSubtitle>
                            </TravelTextWrapper>
                    </InfoRow>
                </InfoWrapper>
                <PictureSection {...infoSectionObjTwo} />
            </InfoContainer>
            <InfoContainer id='Stay'>
                <InfoWrapper>
                    <TopLine>
                        <Heading> Silavadee Pool Spa Resort </Heading>
                        This is the resort where Eivin decided to propose to Bonn, and she said yes!
                        Silavadee holds a special place in our hearts and we are looking forwards to go back with all our loved ones to tie the knot.
                        The resort is idyllically located along the coast, away from noise and commotion, and it even has its own private beach. Check out their <Link color='black' href="https://www.silavadeeresort.com/" target="_blank"> website </Link> for more information.</TopLine>
                    <InfoRow >
                            <TextWrapper>
                                <SecondHeading>Silavadee Pool Spa Resort</SecondHeading>
                                <Subtitle>We will stay at the resort from Friday 29. March to Sunday 31. March.
                                    All our guests will get a special room rate when booking a minimum 2-night stay. The prices for one room one night are as follows:<br/>
                                    <RoomTypeWrapper>
                                    Jacuzzi Deluxe room THB 6,000<br/>
                                    Oceanview Jacuzzi Deluxe room THB 6,800 <br/>
                                    Tropical pool villa THB 10,000<br/>
                                    Partial Oceanview Pool Villa THB 12,000 <br/>
                                    Scenic Pool Villa THB 14,000<br/>
                                    2BR Oceanview Duplex Pool Villa THB 18,000 <br/>
                                    Oceanfront Pool Villa THB 20,000<br/><br/>
                                    Check out the different room types at their <Link color='black' href="https://www.silavadeeresort.com/" target="_blank"> website. </Link>
                                    </RoomTypeWrapper>
                                    If you would like to stay at the resort with us send your booking details to <Link href="mailto:salesevent@silavadeeresort.com">salesevent@silavadeeresort.com</Link> before 30. November. <br/>

                                    Include the promo code <b>WD300324 </b> in you mail to get the discount.<br/>
                                    We recommend booking as soon as possible to get the room you want.
                                </Subtitle>

                                <IconWrapper href="https://www.google.com/maps/place/Silavadee+Resort/@9.4677636,100.0681815,17z/data=!4m9!3m8!1s0x3054f3f946766181:0xd7698fa314f6f2a0!5m2!4m1!1i2!8m2!3d9.4677583!4d100.0707564!16s%2Fg%2F11xc_vcc8" target="_blank">
                                    <Location size="48"/>
                                </IconWrapper>
                            </TextWrapper>
                        <TextWrapper>
                            <SecondHeading>Other Recommendations</SecondHeading>
                            <Subtitle>If you do not wish to stay at Silavadee, Cinnamon Beach Villas is a great alternative only 5 minute walk away.</Subtitle>
                            <IconWrapper href="https://www.google.com/maps/place/Cinnamon+Villas/@9.469352,100.0661098,17z/data=!3m1!4b1!4m9!3m8!1s0x3054f215ff5d7ac5:0x1a3d3f241e0f3047!5m2!4m1!1i2!8m2!3d9.4693467!4d100.0686847!16s%2Fg%2F1vh8mgcy" target="_blank">
                                <Location size="48"/>
                            </IconWrapper>
                        </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}
export default TravelAndStay