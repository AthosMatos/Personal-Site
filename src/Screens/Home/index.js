import React, { useEffect } from 'react';
import { useState } from 'react';
import {AiOutlineArrowDown} from "react-icons/ai";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useSelector } from 'react-redux';
import LanguageButton from './LanguageButton/LanguageButton';
import { motion } from "framer-motion";
import LightSwitchButton from './LightSwitchButton/LightSwitchButton';

const Home = () => 
{ 
  
  return (
    <div style={{display:'flex',height:'100vh',width:'100vw'}}>
      <motion.div style=
      {{
        alignSelf:'center',
        display:'flex',
        justifyContent:'space-evenly',
        minWidth:'20vw',
        flexDirection:'column',  
        marginLeft:30}}>
        
        <LanguageButton style={{marginBottom:'3vh'}}/>
        <LightSwitchButton/>
      </motion.div>
    </div>
  );
}

export default Home;
