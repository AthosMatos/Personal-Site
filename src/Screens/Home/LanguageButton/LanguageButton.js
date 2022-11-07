import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useSelector } from "react-redux";
import { AiOutlineQuestion } from "react-icons/ai";

export default function LanguageButton() 
{
    const [isOpen, setIsOpen] = useState(false);
    const [clicked,setClicked] = useState(false)
    const [firstOpen,setfirstOpen] = useState(true)
    const imgRef = useRef()
    const [textRef,{width:testW}] = useMeasure()
    const [arrowDownRef,{width:arrowDownW}] = useMeasure()
    const [mainRef,{width:mainW}] = useMeasure()
    const [scale,setscale] = useState(0)
    const [buttonW,setButtonW] = useState(0)
    const [buttonH,setButtonH] = useState(0)
    const [openW,setOpenW] = useState(0)
    const [openH,setopenH] = useState(0)
    const [closedH,setClosedH] = useState(0)
    const [closedW,setClosedW] = useState(0)    
    const [onhoverArrowDown,setonhoverArrowDown] = useState(false)

    const iconArrowDown = useSelector((state)=>state.Personalization.theme.iconArrowDown)
    const textColor = useSelector((state)=>state.Personalization.theme.textColor)
    const languageIMG = useSelector((state)=>state.LanguageDealer.flag)
    const language = useSelector((state)=>state.LanguageDealer.language)
    const languageBorder = useSelector((state)=>state.LanguageDealer.borderColor)
    
    const iconSize = '60px'
    const fontSize = '30px'

    useEffect(()=>
    {
        if(!firstOpen)
        {
            setscale(1)
        }
    },[firstOpen])

    useEffect(()=>
    {
        if(buttonW>0 && (mainW == buttonW) && firstOpen)
        {
           // console.log('mainW',mainW)
            setfirstOpen(false)
        }
        
    },[mainW])

    useEffect(()=>
    {
        //console.log(testW)
        if(imgRef.current)
        {
            const iconref = imgRef.current
            if(iconref.offsetHeight > 0 && iconref.offsetWidth > 0 && testW > 0 && arrowDownW > 0)
            {
                setOpenW(testW+iconref.offsetWidth + arrowDownW)
                setopenH(iconref.offsetHeight * 2)
                setClosedW(iconref.offsetWidth)
                setClosedH(iconref.offsetHeight)
                // console.log('ButtonW',iconRef.current.offsetWidth) 
            }
        } 
    },[testW,arrowDownW,imgRef,])

    useEffect(()=>
    {
        if(openW && closedW)
        {
            //console.log('openW',openW) 
            //console.log('closedW',closedW) 

            if(isOpen)
            {
                setButtonW(openW)
                if(clicked) setButtonH(openH)
                else setButtonH(closedH)
                
            }
            else 
            {
                if(!clicked) 
                {
                    setButtonW(closedW)
                    setButtonH(closedH)
                }
            }
        }
    },[openW,closedW,isOpen,clicked])

    return (
        <motion.div
        ref={mainRef}
        transition={{type:'spring',stiffness:150}}
        animate={[!firstOpen&& 
            {
                width:buttonW,
                height:buttonH,
                transform:`scale(${scale})`,
               
            }]}
        style=
        {{
            border:firstOpen?'':`solid ${languageBorder?languageBorder:'white'} 2px`,
            width:buttonW?buttonW:'max-content',
            height:buttonH?buttonH:'max-content',
            opacity:firstOpen?0:1,
            overflow:'hidden', 
            borderRadius:40,
            
        }}
        onMouseEnter={()=>setIsOpen(true)}
        onMouseLeave={()=>setIsOpen(false)}
        > 
            <div style=
            {{
                display:'flex',
                alignItems:'center',
            }}>
                <img ref={imgRef} style=
                {{
                    borderRadius:40,
                    width:iconSize,
                    height:iconSize,
                    objectFit:'cover',
                    padding:10
                }}
                src={languageIMG}
                />
                <p ref={textRef} style={{fontSize:fontSize,color:textColor,cursor:'pointer'}}>{language}</p>
                <div 
                ref={arrowDownRef} 
                style = {{paddingRight:30,paddingLeft:20,}} >
                    <motion.img animate={[
                    {
                        rotate:clicked?'180deg':'0deg',
                        backgroundColor:onhoverArrowDown?'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0)'
                        
                    }]} 
                    onMouseOver={()=>setonhoverArrowDown(true)}
                    onMouseLeave={()=>setonhoverArrowDown(false)}
                    width={30} 
                    src={iconArrowDown} 
                    style={{borderRadius:0,cursor:'pointer'}}
                    onClick={()=>setClicked(!clicked)}/>
                </div>
            </div>

            <div style=
            {{
                display:'flex',
                alignItems:'center',
            }}>
                <img style=
                {{
                    borderRadius:200,
                    width:iconSize,
                    height:iconSize,
                    objectFit:'cover',
                    padding:10
                }}
                src={languageIMG}
                />
                <p style={{fontSize:fontSize,color:textColor,cursor:'pointer'}}>{language}</p>
            </div>        
        </motion.div>
    );
}
