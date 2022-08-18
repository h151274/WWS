import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/';
import RsvpPage from './pages/rsvp';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/rsvp' element={<RsvpPage />} />
        </Routes>
    </Router>
  );
}

export default App;
