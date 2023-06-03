import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #fff;
white-space: nowrap;
padding: 10px 20px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(255, 255, 255, .4);
}
`