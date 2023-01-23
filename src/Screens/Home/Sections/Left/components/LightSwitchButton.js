import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useSelector } from "react-redux";
import { BsFillSunFill } from "react-icons/bs";

export default function LightSwitchButton({style}) 
{
    const [isOpen, setIsOpen] = useState(false);
    const [clicked,setClicked] = useState(false)
    const [firstOpen,setfirstOpen] = useState(true)
    const imgRef = useRef()
    const [textRef,{width:textW}] = useMeasure()
    const [mainRef,{width:mainW}] = useMeasure()
    const [scale,setscale] = useState(0)
    const [buttonW,setButtonW] = useState(0)
    const [buttonH,setButtonH] = useState(0)
    const [openW,setOpenW] = useState(0)
    const [openH,setopenH] = useState(0)
    const [closedH,setClosedH] = useState(0)
    const [closedW,setClosedW] = useState(0)    
    const [onhoverArrowDown,setonhoverArrowDown] = useState(false)

    const textColor = useSelector((state)=>state.Personalization.theme.textColor)
    const theme = useSelector((state)=>state.Personalization.theme.name)
    const themeBorder = useSelector((state)=>state.Personalization.theme.iconBorderColors)
    const themeIMG = useSelector((state)=>state.Personalization.theme)

    const iconSize = '30px'
    const fontSize = '15px'

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
            console.log('mainW',mainW)
            setfirstOpen(false)
        }
        
    },[mainW])

    useEffect(()=>
    {
        //console.log(testW)
        if(imgRef.current)
        {
            const iconref = imgRef.current
            if(iconref.offsetHeight > 0 && iconref.offsetWidth > 0 && textW > 0)
            {
                setOpenW(textW+iconref.offsetWidth)
                setopenH(iconref.offsetHeight * 2)
                setClosedW(iconref.offsetWidth)
                setClosedH(iconref.offsetHeight)
                //console.log('ButtonH',iconref.offsetHeight) 
            }
        } 
    },[textW,imgRef,])

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
        {Object.assign(
                {
                    border:firstOpen?'':`solid ${themeBorder} 2px`,
                    width:buttonW?buttonW:'max-content',
                    height:buttonH?buttonH:'max-content',
                    opacity:firstOpen?0:1,
                    overflow:'hidden', 
                    borderRadius:60,
                    display:'flex',
                    alignItems:'center',
                    
                },
                style
            )
        }
        onMouseEnter={()=>setIsOpen(true)}
        onMouseLeave={()=>setIsOpen(false)}
        >   
            <div 
            ref={imgRef}
            style=
            {{
                width:iconSize,
                height:iconSize,
                padding:'6px',
            }}>
                <BsFillSunFill
                style=
                {{
                    borderRadius:60,
                    width:iconSize,
                    height:iconSize,
                    objectFit:'cover',
                    

                }}
                color={themeBorder}
                />
            </div>
            
            <p ref={textRef} style={{fontSize:fontSize,color:textColor,paddingRight:30}}>{theme}</p>
              
        </motion.div>
    );
}
