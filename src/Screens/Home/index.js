import React, { useEffect } from 'react';
import { useState } from 'react';
import {AiOutlineArrowDown} from "react-icons/ai";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useSelector } from 'react-redux';
import MySiteButton from './MySiteButton';

const Home = () => 
{ 
  const languageIMG = useSelector((state)=>state.LanguageDealer.flag)
  const language = useSelector((state)=>state.LanguageDealer.language)
  const languageBorder = useSelector((state)=>state.LanguageDealer.borderColor)
  const theme = useSelector((state)=>state.Personalization.theme.name)
  const themeBorder = useSelector((state)=>state.Personalization.theme.iconBorderColors)
  const themeIMG = useSelector((state)=>state.Personalization.theme)

  return (
    <div style={{display:'flex',height:'100vh',width:'100vw'}}>
      <div style={{alignSelf:'center',display:'flex',alignItems:'flex-start',justifyContent:'space-evenly',marginLeft:'1vw',flexDirection:'column',height:'26vh'}}>
        <MySiteButton borderColor={languageBorder} image={languageIMG} text={language}/>
        
        <MySiteButton showArrowDown={false} borderColor={themeBorder} image={'https://cdn-icons-png.flaticon.com/512/169/169367.png'} text={'Light'}/>
      </div>
    </div>
  );
}

export default Home;
