import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import RsvpPage from './pages/RSVP/Rsvp';
import LoginForm from "./pages/Login/Login";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginForm/>}/>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/rsvp' element={<RsvpPage />} />
            </Routes>
        </Router>
    );
}
export default App;
