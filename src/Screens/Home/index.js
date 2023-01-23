import React, { useEffect } from 'react';
import { useState } from 'react';
import {AiOutlineArrowDown} from "react-icons/ai";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import HomeBackground from './Components/Homebackground';
import CenterSection from './Sections/Center';
import LeftSection from './Sections/Left';
import RigthSection from './Sections/Right/RigthSection';

const Home = () => 
{ 
  return (
    <HomeBackground>
      <LeftSection/>
      <CenterSection/>
      <RigthSection/>
    </HomeBackground>
  );
}

export default Home;
