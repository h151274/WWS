import React, { useState } from 'react';
import Footer from '../components/Footer';
import FrontSection from '../components/FrontSection';
import Navbar from '../components/Navbar/NavBar';
import PictureSection from '../components/PictureSection';
import {infoSectionObjOne} from '../components/PictureSection/Data';
import Sidebar from '../components/Sidebar';
import TravelAndStay from '../components/TravelAndStay/TravelAndStay';
import { WeddingInfo } from '../components/Wedding/WeddingInfo';
import {Navigate} from "react-router-dom";


const Home = ({hasAccess}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    if (!hasAccess) {
        return <Navigate replace to="/" />
    }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <FrontSection />
        <WeddingInfo />
        <PictureSection {...infoSectionObjOne} />
        <TravelAndStay />
        <Footer />

    </>
  )
}

export default Home