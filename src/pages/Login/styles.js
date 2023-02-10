import styled from "styled-components";

export const BackgroundContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: #927667;
`;

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

export const Form = styled.form`
  background-color: #fff;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 5px;

  @media screen and (max-width: 768px){
    //height: 50%;
  }
`;

export const Icon = styled.p`
margin-bottom: 20px;
text-decoration: none;
font-weight: 700;
font-size: 30px;
font-family: 'Tangerine', cursive;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 16px;
  border-radius: 3px;
  border: ${(props) => (props.$isIncorrect ? '1px solid #FF0000FF' : '1px solid #ccc')};
`;

export const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  background-color: #8cafbb;
  color: white;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 15px;
`;

export const ErrorMsg = styled.p`
  color: red;
  text-align: left;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;


