import { useEffect } from "react"
import { useSelector } from "react-redux"
import AnimatedBackground from "../../CustomComponents/AnimatedBackground"
import { ChooseColor_PAGE } from "../../Redux/PageSaver"
import ChooseColorMode from "./ChooseColorMode"
import ChooseLanguage from "./ChooseLanguage"

const NewComerDealer = () =>
{
    const backColor = useSelector((state)=>state.TempBackColor.BackColor)
    const page = useSelector((state)=>state.PageSaver.Page)

    return (
        <AnimatedBackground backColor={backColor}>
            {page == ChooseColor_PAGE ? 
            <ChooseColorMode/>
            : 
            <ChooseLanguage/>
            }
        </AnimatedBackground>
    )
}

export default NewComerDealer