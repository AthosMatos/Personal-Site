import Card from './Card'
import SpringButton from '../../../CustomComponents/SpringButton'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DarkTheme, LightTheme, setDark, setLight } from '../../../Redux/ThemeDealer'
import { ChooseLanguage_PAGE, setPage } from '../../../Redux/PageSaver'

const ChooseColorMode = ({OnChoose}) =>
{   
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() =>
    {
        localStorage.clear()
        //console.log(localStorage.getItem('theme'))
        const theme = localStorage.getItem('theme')
        if(theme)
        {
            if(theme == LightTheme) dispatch(setLight())
            else if(theme == DarkTheme)dispatch(setDark())
            navigate('/Home')
        }
    },[])

    return (
        <SpringButton showPointer={true} FadeOutOnPress={true} OnpresssAfterAnimation={()=>dispatch(setPage(ChooseLanguage_PAGE))}>
            <Card/>
        </SpringButton>
    )

}

export default ChooseColorMode