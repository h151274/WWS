import React from 'react'
import {FormContainer, FormIframe, Icon} from "./styles";
import {Navigate} from "react-router-dom";


const RsvpPage = ({hasAccess}) => {

    if (!hasAccess) {
        return <Navigate replace to="/" />
    }

    return (
      <FormContainer>
          <Icon>B&E</Icon>
        <FormIframe
            title="RSVP form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf0S3D1kySK6kTGCcuQQtK4bbJVpS1WwY-c-YDJ30-v0C36_Q/viewform?embedded=true"
            style={{ width: '100%', height: '100%' }}
            allowFullScreen
        />
      </FormContainer>
  )
}

export default RsvpPage