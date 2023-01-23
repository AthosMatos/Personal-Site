import { motion } from "framer-motion";

const RigthSection = ()=>
{
    return (
    <motion.div style=
    {{
        alignSelf:'center',
        display:'flex',
        alignItems:'flex-end',
        minWidth:'18vw',
        flexDirection:'column',  
        marginRight:30,
        border:'solid red 2px'
    }}>
            <p style={{color:'white'}}>Icon</p>
            <p style={{color:'white'}}>Icon</p>
            <p style={{color:'white'}}>Icon</p>
    </motion.div>
    )
}

export default RigthSection