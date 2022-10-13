import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DarkTheme, LightTheme, setDark, setLight } from '../../../../../Redux/ThemeDealer';
import './Style.css'

const HalfCard = ({Text,img,onHoverInChangeToColor,onHoverOutChangeToColor,ThemeColor,Containerstyle}) =>
{
    const DivRev = useRef()
    const [flex,setFlex] = useState(1)
    const [fontSize,setFontSize] = useState(0)
    const [divW,setDivW] = useState(0)
    const [stdFontSize,setstdFontSize] = useState()
    const dispatch = useDispatch()

    useEffect(()=>
    {
        if(DivRev.current)
        {
            setDivW(DivRev.current.offsetWidth)
        }
    },[DivRev.current])

    useEffect(()=>
    {
        if(divW)setstdFontSize(`${(divW * 0.2) * 0.5}px`)
    },[divW])

    useEffect(()=>
    {
        if(stdFontSize)setFontSize(stdFontSize)
    },[stdFontSize])

    const Onpress = () =>
    {
        if(ThemeColor == 'dark')
        {
            dispatch(setDark())
            localStorage.setItem('theme',DarkTheme)
        }
        else
        {
            dispatch(setLight())
            localStorage.setItem('theme',LightTheme)
        }
    }

    const chanceBackColor = (flex,state, FontSize) =>
    {
        setFlex(flex)
        setFontSize(FontSize)
        if (state == 'in') onHoverInChangeToColor()
        else if (state == 'out') onHoverOutChangeToColor()
    }

    return (
        <div 
        onClick={Onpress}
        className='cardContainer'
        style={Object.assign(
            {
                flex:flex,
            },
            Containerstyle)}
        ref = {DivRev}
        onTouchStart={()=>chanceBackColor(2,'in',`${(divW * 0.15)}px`)}
        onMouseOver={()=>chanceBackColor(2,'in',`${(divW * 0.15)}px`)}
        
        onTouchEnd={()=>chanceBackColor(1,'out',stdFontSize)}
        onMouseOut={()=>chanceBackColor(1,'out',stdFontSize)}
        >
            <p style={{fontSize:fontSize}} className='text'>{Text}</p>
            <img height={'100%'} className='img' src={img}/>
        </div>
    )
}

export default HalfCard