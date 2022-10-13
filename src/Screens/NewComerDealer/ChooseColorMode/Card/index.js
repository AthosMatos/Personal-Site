import { useDispatch } from 'react-redux'
import { setBackColor } from '../../../../Redux/TempBackColor'
import { DARKMODE_BACKCOLOR, LIGHTMODE_BACKCOLOR, STANDARDLIGHT_BACKCOLOR } from '../../../../Redux/ThemeDealer'
import HalfCard from './HalfCard'

const cardStyle = 
{
    width: 'clamp(8rem, 80vw, 28rem)',
    height: 'clamp(8rem, 60vh, 32rem)',
    overflow: 'hidden',
    display: 'flex',
    backgroundColor: 'grey',
    borderRadius: '1.5rem',
    transition: 'all .2s ease-in-out',
    boxShadow: 'rgba(0, 0, 0, 0.8) 0px 0px 20px'
}

const Card = () =>
{
    const dispatch = useDispatch()

    return (
        <div style={cardStyle}>
            <HalfCard 
            Text={'Light Mode'} 
            img={require('../../../../assets/cityDay.jpg')}
            onHoverInChangeToColor = {()=>dispatch(setBackColor(LIGHTMODE_BACKCOLOR))}
            onHoverOutChangeToColor = {()=>dispatch(setBackColor(STANDARDLIGHT_BACKCOLOR))}
            />           
            <HalfCard 
            ThemeColor={'dark'}
            Text={'Dark Mode'} 
            onHoverInChangeToColor={()=>dispatch(setBackColor(DARKMODE_BACKCOLOR))}
            onHoverOutChangeToColor = {()=>dispatch(setBackColor(STANDARDLIGHT_BACKCOLOR))}
            img={require('../../../../assets/cityNight.png')}
            />
        </div>
    )
}

export default Card