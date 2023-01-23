import { motion } from "framer-motion";

const CenterSection = () =>
{

    return (
    <motion.div style=
    {{
        display:'flex',
        justifyContent:'center',
        minWidth:'40vw',
        flexDirection:'column',  
        border:'solid red 2px'
    }}>
        <p style={{color:'white'}}>Welcome do Athos's Hub</p>
    </motion.div> 
    )
}

export default CenterSection