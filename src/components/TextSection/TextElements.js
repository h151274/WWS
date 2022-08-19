import styled from 'styled-components';

export const InfoContainer = styled.div`
background-color: #EFE1D2;

@media screen and (max-width: 768px){
    padding: 100px 0;    
}

`;
export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
//height: 560px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
 
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const Heading = styled.h1`
color: #000;
margin-bottom: 20px;
font-size: 20px;
line-height: 1.1;
font-weight: 600;
text-transform: uppercase;


@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const TopLine = styled.p`
color: #000;
font-size: 30px;
//line-height: 16px;
font-weight: 500;
margin-top:100px;
margin-bottom: 100px;
`;

export const Subtitle = styled.p`
color: #000;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
`;

export const BtnWrap = styled.div`
display: flex ;
justify-content: flex-start;
`;


