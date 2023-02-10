import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useState} from "react";
import Home from './pages/Home';
import RsvpPage from './pages/RSVP/Rsvp';
import LoginForm from "./pages/Login/Login";

const App = () => {
    const [hasAccess, setHasAccess] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/">
                    {hasAccess
                        ? <Route exact path='/home' element={<Home hasAccess={hasAccess}/>} />
                        : <Route exact path='/' element={<LoginForm setHasAccess={setHasAccess}/>} />
                    }
                </Route>
                <Route exact path='/home' element={<Home hasAccess={hasAccess}/>} />
                <Route exact path='/rsvp' element={<RsvpPage hasAccess={hasAccess}/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
