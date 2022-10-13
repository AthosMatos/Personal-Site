import React from 'react';
import {AiOutlineArrowDown} from "react-icons/ai";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useSelector } from 'react-redux';

const Home = () => 
{ 
  const backColor = useSelector((state)=>state.Personalization.theme.PrimaryButtonColor)

  return (
    <div style={{backgroundColor:backColor,display:'flex',height:'100vh'}}>
      
    </div>
      
  );
}

export default Home;
