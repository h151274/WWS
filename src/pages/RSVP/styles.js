import styled from "styled-components";
import { Link } from 'react-router-dom'

export const BackgroundContainer = styled.div`
justify-content: center;
align-items: center;
height: 100vh;
overflow: hidden;
`;

export const BackgroundImage = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`
export const Container = styled.div`
min-height: 600px;
min-width: 250px;
position: absolute;
bottom: 0;
left: 0;
right: 0;
top:0;
z-index: 0;
overflow: hidden;
`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
overflow-x: auto;
white-space: nowrap;

@media screen and (max-width: 400px){
    height:100%;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
overflow: hidden;

@media screen and (max-width: 480px){
    //padding: 10px;
}
`;
/*
export const ContentBox = styled.div`
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 700px;
height: 800px;
position: absolute;
align-items: center;
background: white;
@media screen and (max-width: 768px){
    width: 400px;
    height: 600px;
}
`;
*/

export const Form = styled.form`
background-color: #fff;
opacity: 0.8;
max-width: 600px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 50px 32px;
border-radius: 5px;

@media screen and (max-width: 768px){
    width: 80%;
    height: 90%;
}
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
color: #000;
font-size: 16px;
text-align: left;
`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 24px;
font-size: 16px;
text-align: left;
border: 1px solid #000;

@media screen and (max-width: 768px){
    padding: 10px 10px;
    margin-bottom: 10px;
}

@media screen and (max-width: 350px){
    width: 90%;
}

`;

export const FormInputMessage = styled.input`
padding: 50px 16px;
margin-bottom: 24px;
border-radius: 4px;
font-size: 16px;
text-align: left;
border: 1px solid #000;

@media screen and (max-width: 768px){
    padding: 30px 10px;
    margin-bottom: 10px;
}
@media screen and (max-width: 350px){
    width: 90%;
}

`;
export const FormButton = styled.button`
background: black;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
max-width: 30%;
cursor: pointer;

@media screen and (max-width: 768px){
    padding: 10px 0;
}
`;



/*
export const FormContent = styled.form`
background-color: aliceblue;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 400px){
    padding: 32px 32px;
}
`
*/


export const RsvpH1 = styled.h1`
color: burlywood;
margin-top: 20px;
margin-bottom: 10px;
font-size: 80px;
text-align: center;
font-family: 'Tangerine', cursive;
@media screen and (max-width: 768px){
    font-size: 50px;
}

@media screen and (max-width: 300px){
    font-size: 40px;
}
`;

export const RsvpH2 = styled.h2`
font-size: 2.5rem;
color: #000;
margin-bottom: 40px;
@media screen and (max-width: 768px){
    font-size: 30px;
}
`;

export const Icon = styled(Link)`
margin-top: 32px;
text-decoration: none;
color: white;
font-weight: 700;
font-size: 40px;
font-family: 'Tangerine', cursive;
`;
