import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FrontSection from '../components/FrontSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import PictureSection from '../components/pictureSection';
import { WeddingInfo } from '../components/Wedding';

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
    <WeddingInfo/> 
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    


    </>
  )
}

export default Home