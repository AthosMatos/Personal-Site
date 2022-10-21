import userEvent from "@testing-library/user-event"
import { useEffect, useRef, useState } from "react"
import { isMobile } from "react-device-detect"
import { useSelector } from "react-redux"
import useMeasure from "react-use-measure"
import Button from "./Button"

const MySiteButton = ({text,borderColor,image,style,showArrowDown}) =>
{ 
    const iconArrowDown = useSelector((state)=>state.Personalization.theme.iconArrowDown)
    const textColor = useSelector((state)=>state.Personalization.theme.textColor)

    const [openButton,setOpenButton] = useState(false)
    const [TextIconRef, { width: TextIconWidth }] = useMeasure()
    const [flagRef, { width: flagWidth }] = useMeasure()
    const [insideWidth,setinsideWidth] = useState()
    const [click,setclick] = useState(false)
    const [firstShow,setfirstShow] = useState(true)
    const [scaleUp,setScaleUp] = useState(false)
    const [loaded,setloaded] = useState(false)
    const [fullyLoaded,setfullyLoaded] = useState(false)

    const insideIconSize = 'clamp(2.4rem,3.5vw,3.5rem)'
    const fontSize = 'clamp(0.8rem,1.6vw,1.2rem)'
    const arrowIconW = 'clamp(0.8rem,1.2vw,1.6rem)'
    const paddingAroundBorder = 'clamp(0.2rem,0.8vw,0.6rem)'

    useEffect(()=>
    {
        if(openButton) setinsideWidth(TextIconWidth+flagWidth)
        else setinsideWidth(flagWidth)

    },[TextIconWidth,flagWidth,openButton])

    useEffect(()=>
    {
        if(!loaded &&flagWidth && TextIconWidth)setloaded(true)

    },[TextIconWidth,flagWidth])

    useEffect(()=>
    {
        if(flagWidth && firstShow && loaded)
        {
            setfirstShow(false)
            setScaleUp(true)
            setfullyLoaded(true)
        }
        
    },[flagWidth,TextIconWidth])

    const onClick = () =>
    {
        if(isMobile)
        {
            setOpenButton(!openButton)
        }
    }

    return (
        <Button
        style={Object.assign(
        {
            borderRadius:'12rem',
            border:` ${borderColor} ${'1px'} solid`,
            overflow:'hidden',
            opacity:fullyLoaded ? 1 : 0
        },
        style
        )}
        scale={scaleUp ? {from:0,to:1} : undefined}
        AnimatedWidth={(insideWidth!=0 && insideWidth!=undefined)?insideWidth:undefined}
        OnHoverIn={()=>
        {
            if(!isMobile) setOpenButton(true)
        }}
        OnHoverOut={()=>
        {
            if(!isMobile) setOpenButton(false)
        }}
        onCurrentlyAnimationProgress={(s,w,h)=>
        {
            if(s == 100 && scaleUp)setScaleUp(false)
        }}
        onClick={()=>onClick()}
        >
            <div style={{display:'flex', alignItems:'center'}}>
                <img 
                ref={flagRef}
                src={image} 
                style=
                {{
                    padding:paddingAroundBorder,
                    borderRadius:'12rem',
                    objectFit:'cover',
                    width:insideIconSize,
                    height:insideIconSize
                }}
                />
                <div 
                ref={TextIconRef} 
                style=
                {{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <p 
                    style=
                    {{
                        color:textColor,
                        paddingLeft:'clamp(0.2rem,0.8vw,0.6rem)',
                        fontSize:fontSize,
                        paddingRight:(showArrowDown == false)?'clamp(1.4rem,6vw,1.8rem)':0
                    }} >{text}</p>
                    {showArrowDown!=false && <img 
                    src={iconArrowDown} 
                    style=
                    {{
                        paddingLeft:'clamp(0.5rem,1.2vw,1.2rem)',
                        paddingRight:'clamp(0.8rem,1.6vw,1.8rem)',
                        width:arrowIconW
                    }} />}
                </div>
            </div>
        </Button> 
    )
}

export default MySiteButton