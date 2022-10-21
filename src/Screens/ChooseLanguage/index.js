import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SpringButton from "../../CustomComponents/SpringButton"; 
import { DARKMODE_BACKCOLOR, DarkTheme, LIGHTMODE_BACKCOLOR, LightTheme } from "../../Redux/ThemeDealer"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import { setBackColor } from "../../Redux/TempBackColor";
import { HomePage, setPage } from "../../Redux/PageSaver";
import { BrazilFlag, EN, PT, setEN, setPT, USFlag } from "../../Redux/LanguageDealer";

const BrasilColors = ['#009B3A','#002776','#FEDF00']
const USAColors = ['#002664','#BB133E','#FFFFFF']

const ChooseLanguage = () =>
{
    const dispatch = useDispatch()
    const themeData = useSelector((state)=>state.Personalization.theme)
    const [languageSelection,setLanguageSelection] = useState(0)
    const [gradientColors,setGradientColors] = useState(BrasilColors)
    const [fading,setfading] = useState(false)
    const [fadingGradientCircle,setfadingGradientCircle] = useState(false)
    const [bounceGradient,setbounceGradient] = useState(false)
    const [activateSmoothTransition,setactivateSmoothTransition] = useState(false)

    const flagSize = 'clamp(12rem,50vw,22rem)'
    const flagBorder = 'clamp(1.5rem,4vw,2rem)'
    const GradientBorderSize = 'clamp(20rem,80vw,40rem)'
    const GradientBorderSizeOnChange = 'clamp(18rem,70vw,36rem)'
    const arrowSize = 'clamp(2rem,8vw,3rem)'

    useEffect(() =>
    {
        const language = localStorage.getItem('language')
        if(language)
        {
            if(language == PT) dispatch(setPT())
            else if(language == EN)dispatch(setEN())

            dispatch(setPage(HomePage))
        }
    },[])


    useEffect(()=>
    {
        if(languageSelection<1)
        {
            setGradientColors(BrasilColors)
        }
        else 
        {
            setGradientColors(USAColors)
        }

    },[languageSelection])
    
    useEffect(()=>
    {
        if(themeData)
        {
            //console.log(themeData)
            if(themeData.name == LightTheme) dispatch(setBackColor(LIGHTMODE_BACKCOLOR))
            else if(themeData.name == DarkTheme)dispatch(setBackColor(DARKMODE_BACKCOLOR))
        }

    },[themeData])
    
    return (
        <SpringButton 
        disableClick={true} 
        GradientBorder={true} 
        FadeOff={fadingGradientCircle}
        GradientBorderColors={gradientColors}
        OnShow={()=>setactivateSmoothTransition(true)}
        style = {Object.assign(
        {
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:bounceGradient ? GradientBorderSizeOnChange : GradientBorderSize,
            height:bounceGradient ? GradientBorderSizeOnChange : GradientBorderSize,
            boxShadow: '-1px 3px 11px rgba(0, 0, 0, 0.47)',
            transition: activateSmoothTransition&&'all .3s ease-in-out'
        },
        )}>
            {(languageSelection>0)&&
            <SpringButton 
            style={{position:'absolute',left:'clamp(1rem,2.5vw,4rem)'}}
            enableHover={true} 
            showPointer={true}
            OnHoverScaleTo={1.1}
            OnPressScaleTo={1.4}
            Onpresss={()=>
            {
                setfading(true)
                setbounceGradient(true)
            }}
            FadeOutOnPress={true}
            OnpresssAfterAnimation={()=>
            {
                setLanguageSelection((ls)=>{return ls - 1})
                setbounceGradient(false)
                setfading(false)
            }}>
                <AiOutlineLeft 
                style={{fontSize:arrowSize}} 
                color={themeData.PrimaryButtonColor} 
                />
            </SpringButton>}

            {languageSelection == 0 &&
            <SpringButton 
            enableHover={true} 
            showPointer={true}
            OnHoverScaleTo={1.1}
            FadeOutOnPress={true}
            FadeOff={fading}
            Onpresss={()=>
            {
                setfadingGradientCircle(true)
                setactivateSmoothTransition(false)
            }}
            OnpresssAfterAnimation={()=>
            {
                localStorage.setItem('language',PT)
                dispatch(setPT())
                dispatch(setPage(HomePage))
            }}>
                <img src={BrazilFlag} 
                style=
                {{
                    width:flagSize,
                    maxWidth:'24rem',
                    borderRadius:flagBorder}}/>
            </SpringButton>
            }
            {!(languageSelection == 0) &&
            <SpringButton 
            enableHover={true} 
            FadeOff={fading}
            showPointer={true}
            Onpresss={()=>
            {
                setfadingGradientCircle(true)
                setactivateSmoothTransition(false)
            }}
            OnHoverScaleTo={1.1}
            FadeOutOnPress={true}
            OnpresssAfterAnimation={()=>
            {
                localStorage.setItem('language',EN)
                dispatch(setEN())
                dispatch(setPage(HomePage))
            }}>
                <img src={USFlag} 
                style=
                {{
                    width:flagSize,
                    maxWidth:'24rem',
                    borderRadius:flagBorder}}/>
            </SpringButton>
            }
            
            {(languageSelection<1)&&
            <SpringButton 
            style={{position:'absolute',right:'clamp(1rem,2.5vw,4rem)'}}
            enableHover={true} 
            OnHoverScaleTo={1.1}
            showPointer={true}
            OnPressScaleTo={1.4}
            FadeOutOnPress={true}
            Onpresss={()=>
            {
                setfading(true)
                setbounceGradient(true)
            }}
            OnpresssAfterAnimation={()=>
            {
                setLanguageSelection((ls)=>{return ls + 1})
                setbounceGradient(false)
                setfading(false)
            }}>

                <AiOutlineRight 
                style={{fontSize:arrowSize}} 
                color={themeData.PrimaryButtonColor} 
                />
            </SpringButton>}
            
        </SpringButton>
    
    )
}

export default ChooseLanguage