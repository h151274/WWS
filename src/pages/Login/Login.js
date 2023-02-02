import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {BackgroundContainer, Form, Button, Input, FormWrap, Container} from "./styles";

function LoginForm() {
    const [password, setPassword] = useState("");
    const [isGranted, setIsGranted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if password is correct
        if (password === "secret") {
            setIsGranted(true);
        }
    };

    if (isGranted) {
        return <Navigate to="/home" />;
    } else {
        //show error message on page
    }

    return (
        <BackgroundContainer>
            <Container>
                <FormWrap>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="password">Password:</label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                />
                        <Button type="submit">Submit</Button>
                    </Form>
                </FormWrap>
            </Container>
        </BackgroundContainer>
    );
}

export default LoginForm;
