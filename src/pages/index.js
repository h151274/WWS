import React, { useState } from 'react';
import Footer from '../components/Footer';
import FrontSection from '../components/FrontSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import PictureSection from '../components/PictureSection';
import { infoSectionObjOne, infoSectionObjTwo } from '../components/PictureSection/Data';
import Sidebar from '../components/Sidebar';
import TextSection from '../components/TextSection';
import { textObjOne } from '../components/TextSection/Data';
import { WeddingInfo } from '../components/Wedding';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FrontSection />
      <WeddingInfo />
      <PictureSection {...infoSectionObjOne} />
      <TextSection {...textObjOne} />
      <PictureSection {...infoSectionObjTwo} />
      <InfoSection {...homeObjOne} />
      <Footer />

    </>
  )
}

export default Home