import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FrontSection from '../components/FrontSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data';
import PictureSection from '../components/PictureSection';
import { WeddingInfo } from '../components/Wedding';
import { infoSectionObjOne, infoSectionObjTwo } from '../components/PictureSection/Data';
import TextSection from '../components/TextSection';
import { textObjOne } from '../components/TextSection/Data';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => { 
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <FrontSection/>
    <WeddingInfo /> 
    <PictureSection {...infoSectionObjOne}/>    
    <TextSection {...textObjOne}/>
    <PictureSection {...infoSectionObjTwo}/>    
    <InfoSection {...homeObjOne}/>
    <Footer/>
    
    </>
  )
}

export default Home