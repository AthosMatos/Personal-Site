import { useSelector } from "react-redux"
import { ChooseColor_PAGE,ChooseLanguage_PAGE, HomePage } from "../../Redux/PageSaver"
import AnimatedBackground from "../../CustomComponents/AnimatedBackground"
import ChooseColorMode from "../ChooseColorMode"
import ChooseLanguage from "../ChooseLanguage"
import Home from "../Home"

const Organizer = () =>
{
    const backColor = useSelector((state)=>state.TempBackColor.BackColor)
    const page = useSelector((state)=>state.PageSaver.Page)

    return (
        <AnimatedBackground backColor={backColor}>
            {page == ChooseColor_PAGE ? 
            <ChooseColorMode/>
            :page == ChooseLanguage_PAGE ? 
            <ChooseLanguage/>
            :page == HomePage ? 
            <Home/>
            :
            <></>
            }
        </AnimatedBackground>
    )
}

export default Organizer