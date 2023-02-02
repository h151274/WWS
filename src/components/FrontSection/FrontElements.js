import styled from "styled-components";

export const FrontContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 1000px;
position: relative;
z-index: 1;
`;

export const FrontBg = styled.div`
position: absolute;
top: 0;
right:0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const HeaderImage = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`

export const FrontContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const FrontH1 = styled.h1`
color: #fff;
font-size: 80px;
text-align: center;
font-family: 'Tangerine', cursive;

@media screen and (max-width: 768px){
    font-size: 50px;
}

@media screen and (max-width: 480px){
    font-size: 42px;
}
`;

export const FrontP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`;




