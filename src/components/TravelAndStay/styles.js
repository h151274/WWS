import styled from 'styled-components';

export const InfoContainer = styled.div`
  background-color: ${props => {
    if (props.id === 'Travel') {
        return '#EFE1D2';
    } else if (props.id === 'Stay') {
        return '#FFFFFF';
    }
}};
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  text-align: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  
  @media screen and (max-width: 764px){
    grid-template-columns: 1fr;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  align-content: center;
`;

export const TravelTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;

export const RoomTypeWrapper = styled.div`
  border: 1px solid black;
  text-align: left;
  padding: 20px;
  margin: 20px 40px;
  font-size: 16px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const SecondHeading = styled.h1`
color: #000;
margin-bottom: 20px;
font-size: 20px;
line-height: 1.1;
font-weight: 600;
text-transform: uppercase;

@media screen and (max-width: 480px) {
    font-size: 14px;
}
`;

export const Heading = styled.h1`
color: #000;
margin-bottom: 20px;
font-size: 30px;
line-height: 1.1;
font-weight: 700;
text-transform: uppercase;

@media screen and (max-width: 480px) {
    font-size: 20px;
}
`;
export const TopLine = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 500;
  margin-top:100px;
  margin-bottom: 100px;
  
  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 70px;
  }
`;

export const Subtitle = styled.p`
color: #000;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
}
`;
export const FlightSubtitle = styled.p`
color: #000;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
  text-align: left;


  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
}
`;

export const IconWrapper = styled.a`
  
  align-content: center;
  display: inline-block;
  color: black;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #dbbb9a;  }
`;

export const Link = styled.a`
  color: black;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #dbbb9a;  }
`;


