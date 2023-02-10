import React from 'react'
import {Navigate} from "react-router-dom";


const TestPage = ({hasAccess}) => {

    console.log(hasAccess)
    if (!hasAccess) {
        return <Navigate replace to="/" />
    }

    return (
        <div style={{backgroundColor: 'lavenderblush', height: '100vh'}}>
            <h1> HOME</h1>
        </div>
    )
}

export default TestPage