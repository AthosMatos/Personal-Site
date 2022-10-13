import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {animated, useSpring } from 'react-spring';

const SpringButton = (
{ 
    GradientBorder, 
    GradientBorderWidth, 
    GradientBorderColors, 
    GradientBorderSpeed, 
    children, 
    style, 
    enableHover, 
    OnHoverIn, 
    OnHoverOut, 
    OnHoverScaleTo, 
    OnpresssAfterAnimation, 
    Onpresss,
    disableClick, 
    OnPressScaleTo,
    opacityTo,
    FadeOutOnPress,
    show,
    showPointer
}) => 
{
    const [clicked,setClicked]= useState(false)
    const [pressState, setPressState] = useState(0);
    const [scale, setscale] = useState(1)
    const [opacity, setOpacity] = useState(opacityTo ? opacityTo : 1)
    const ref = useRef()
    const backColor = useSelector((state)=>state.TempBackColor.BackColor)
   
    const ScaleAnimationDealer = () => 
    {
        if (ref.current) 
        {
            const progress = parseFloat(ref.current.style.transform.split('(')[1].split(')')[0])

            //console.log(Math.round((100*progress)/scale))
            
            if (pressState === 1) {
                if (Math.abs(progress - scale) <= 0.05) 
                {
                    setscale(FadeOutOnPress ? 0:  1)
                    if(FadeOutOnPress)setOpacity(0)
                    setPressState(2)
                }
            }
            else if (pressState === 2) 
            {
                if (Math.abs(progress - scale) <= 0.05) 
                {
                    if(clicked)
                    {
                        OnpresssAfterAnimation&& OnpresssAfterAnimation()
                        setClicked(false)
                    }
                    setPressState(0)
                    
                }
            }
        }
    }

    const animatedStyle = useSpring(
    {
        from: { opacity: 0, transform: `scale(0.2)` },
        to: { opacity: opacity, transform: `scale(${scale})` },
        onChange: ScaleAnimationDealer,
        
    })

    const GradientAnimation = useSpring(
    {
        from: { background:`linear-gradient(0deg, ${GradientBorderColors})` },
        to: { background:`linear-gradient(360deg, ${GradientBorderColors})` },
        loop:true,
        config:
        {
            duration:GradientBorderSpeed ? GradientBorderSpeed: 2000
        }
    })
    
    return (
       
        <animated.div
        ref={ref}
        style={Object.assign(animatedStyle, style,GradientBorder&& GradientAnimation,{cursor:showPointer ? 'pointer' : 'default'})}
        onMouseLeave={()=>
        {
            if(enableHover && pressState == 0)
            {
                setscale(1)
                OnHoverOut&& OnHoverOut()
            }
        }}
        onMouseOver={()=>
        {
            if(enableHover && pressState == 0)
            {
                setscale(OnHoverScaleTo ? OnHoverScaleTo : 1.2)
                OnHoverIn&& OnHoverIn()
            }
        }}
        onMouseUp={() => 
        {
            if(!disableClick && pressState == 0)setscale(1) 
            setClicked(true)
        }}
        onMouseDown={() => 
        {
            if(!disableClick && pressState == 0)setscale(OnPressScaleTo ? OnPressScaleTo : 1.2)

        }}
        onClick={() => {
            //console.log('clicked')
            if(!disableClick && !disableClick)
            {
                setscale(OnPressScaleTo ? OnPressScaleTo : 1.2)
                setClicked(true)
                Onpresss&& Onpresss()
                setPressState(1)
            }
            
        }}
        >
            {GradientBorder?
            <div style=
            {{
                background:backColor,
                width:`${GradientBorderWidth ? 100 - GradientBorderWidth : 98}%`,
                height:`${GradientBorderWidth ? 100 - GradientBorderWidth : 98}%`,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:'100rem',
            }}>
                {children}
                </div>
            :
            <>
                {children}
            </>
            }
        </animated.div>
    )
}

export default SpringButton