import { motion } from "framer-motion";
import LanguageButton from "./components/LanguageButton";
import LightSwitchButton from "./components/LightSwitchButton";

const LeftSection = ()=>
{
    return (
    <motion.div style=
    {{
        alignSelf:'center',
        display:'flex',
        
        minWidth:'18vw',
        minHeight:'105px',
        flexDirection:'column',  
        marginLeft:30,
        border:'solid red 2px'
    }}>
        <LightSwitchButton style={{marginBottom:14}}/>
        <LanguageButton />
    </motion.div>
    )
}

export default LeftSection