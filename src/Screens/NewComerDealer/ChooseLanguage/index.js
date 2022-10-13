import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SpringButton from "../../../CustomComponents/SpringButton"
import { DARKMODE_BACKCOLOR, DarkTheme, LIGHTMODE_BACKCOLOR, LightTheme } from "../../../Redux/ThemeDealer"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import { setBackColor } from "../../../Redux/TempBackColor";
import { useNavigate } from "react-router-dom";

const BrazilFlag = require('../../../assets/brasilFlag.png')
const USFlag = require('../../../assets/unitedStatesFlag.png')

const BrasilColors = ['#009B3A','#002776','#FEDF00']
const USAColors = ['#002664','#BB133E','#FFFFFF']

const ChooseLanguage = () =>
{
    const dispatch = useDispatch()
    const themeData = useSelector((state)=>state.Personalization.theme)
    const [languageSelection,setLanguageSelection] = useState(0)
    const [gradientColors,setGradientColors] = useState(BrasilColors)
    const navigate = useNavigate()

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
        GradientBorderColors={gradientColors}
        style = {Object.assign(
        {
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:'40vw',
            height:'40vw',
            borderRadius:'100rem',
            boxShadow: '-1px 3px 11px rgba(0, 0, 0, 0.47)',
            maxWidth:'45rem',maxHeight:'45rem',
            minHeight:'28rem',minWidth:'28rem'
        },
        )}>
            <SpringButton 
            enableHover={true} 
            showPointer={true}
            OnHoverScaleTo={1.1}
            OnpresssAfterAnimation={()=>{navigate('/Home')}}
            >
                <img src={languageSelection == 0 ? BrazilFlag : USFlag } 
                style=
                {{
                    width:'60vw',
                    maxWidth:'24rem',
                    maxHeight:'16rem',
                    minHeight:'12rem',
                    minWidth:'6rem',
                    height:'40vw',
                    borderRadius:'2rem'}}/>
            </SpringButton>

            {(languageSelection>0)&&
            <SpringButton 
            style={{position:'absolute',marginLeft:-520}} 
            enableHover={true} 
            showPointer={true}
            OnHoverScaleTo={1.1}
            OnPressScaleTo={1.4}
            Onpresss={()=>setLanguageSelection((ls)=>{return ls - 1})}>
                <AiOutlineLeft 
                style={{fontSize:'3rem'}} 
                color={themeData.PrimaryButtonColor} 
                />
            </SpringButton>
            }
            
            {(languageSelection<1)&&
            <SpringButton 
            style={{position:'absolute',marginLeft:520}} 
            enableHover={true} 
            OnHoverScaleTo={1.1}
            showPointer={true}
            OnPressScaleTo={1.4}
            Onpresss={()=>setLanguageSelection((ls)=>{return ls + 1})}>

                <AiOutlineRight 
                style={{fontSize:'3rem'}} 
                color={themeData.PrimaryButtonColor} 
                />
            </SpringButton>
            }
            
        </SpringButton>
    
    )
}

export default ChooseLanguage