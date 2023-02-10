import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import {BackgroundContainer, Form, Button, Input, FormWrap, Container, ErrorMsg, Icon} from "./styles";
import config from "../../config.json";

function LoginForm({ setHasAccess }) {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const correctPassword = config.password;
    const [wrongPassword, setWrongPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if password is correct
        if (password === correctPassword) {
            setHasAccess(true);
            navigate('/home');
        }
        setWrongPassword(true);

    };
    return (
        <BackgroundContainer>
            <Container>
                <FormWrap>
                    <Form onSubmit={handleSubmit}>
                        <Icon>B&E</Icon>
                        <label htmlFor="password">Password:</label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            $isIncorrect={wrongPassword}
                        />
                        {wrongPassword ? <ErrorMsg>Password incorrect</ErrorMsg> : null }
                        <Button type="submit">Submit</Button>
                    </Form>
                </FormWrap>
            </Container>
        </BackgroundContainer>
    );
}

export default LoginForm;
