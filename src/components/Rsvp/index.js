import React from 'react'
import { BackgroundContainer, BackgroundImage, Container, ContentBox, FormButton, FormInput, FormInputMessage, FormLabel, Form, RsvpH1, RsvpH2, FormWrap, FormContent } from './RsvpElements'
import bgImage from '../../images/beach.jpg'

export const Rsvp = () => {
    return (
        <BackgroundContainer>
            <BackgroundImage src={bgImage} alt="headerImage" />
            <Container>
                <FormWrap>
                    <FormContent>                     
                        <Form>
                        <RsvpH1>Will you attend?</RsvpH1>
                        <RsvpH2>R.S.V.P</RsvpH2>
                            <FormInput type='name' placeholder='Full Name' required />
                            <FormInput type='email' placeholder='E-Mail' required />
                            <FormInput type='guests' placeholder='Guests' required />
                            <FormInputMessage type='Message' placeholder='Message' required />
                            <FormButton type='submit'>Send</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </BackgroundContainer>
    )
}
