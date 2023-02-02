import React from 'react'
import {
    BackgroundContainer,
    BackgroundImage,
    Container, Form, FormButton,
    FormContent, FormInput, FormInputMessage,
    FormWrap,
    Icon, RsvpH1, RsvpH2
} from "./styles";
import bgImage from "../../images/rsvp.jpg";

const RsvpPage = () => {
  return (
        <BackgroundContainer>
            <BackgroundImage src={bgImage} alt="headerImage" />
            <Container className='container'>
                <FormWrap className='FormWrap'>
                    <Icon to="/Home" className='Icon'>B & E</Icon>
                    <FormContent className='FormContent'>
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

export default RsvpPage