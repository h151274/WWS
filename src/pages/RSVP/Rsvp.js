import React from 'react'
import {FormContainer, Img, NavbarContainer, NavLogo,} from "./styles";
import {Navigate} from "react-router-dom";
import logoBlack from "../../images/logoBlack.png";

const RsvpPage = ({hasAccess}) => {

    if (!hasAccess) {
        return <Navigate replace to="/" />
    }

    return (
      <FormContainer>
          <NavbarContainer>
              <NavLogo to='/home' >
                  <Img src={logoBlack} alt={"logoBlack"} />
              </NavLogo>
          </NavbarContainer>
        <iframe
            title="RSVP form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf0S3D1kySK6kTGCcuQQtK4bbJVpS1WwY-c-YDJ30-v0C36_Q/viewform?embedded=true"
            style={{ width: '100%', height: '100%', border:'none'}}
            allowFullScreen
        >
            Loading...

        </iframe>

      </FormContainer>
  )
}

export default RsvpPage