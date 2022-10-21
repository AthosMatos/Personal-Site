import { useEffect, useRef, useState } from 'react';
import {animated, easings, useSpring,useTransition } from 'react-spring';

const Button = ({show,AnimatedWidth,AnimatedHeight,children,style,onClick,scale,onCurrentlyAnimationProgress,OnHoverIn,OnHoverOut,animate}) =>
{
    const ScaleAnimation = useSpring(
    {
        from: {transform: `scale(${scale?scale.from:0})` },
        to: {transform: `scale(${scale?scale.to:1})` },
        onChange:(a)=>
        {
            const progress = parseInt(parseInt(parseFloat(a.value.transform.split('(')[1].split(')')[0]) * 100)/(scale?scale.to:1))

            onCurrentlyAnimationProgress&& onCurrentlyAnimationProgress(progress,undefined,undefined) 
            //console.log(progress)
        }
    })

    const SizeWidthAnimation = useSpring(
    {
        to: {width:AnimatedWidth},
        config:{friction:10,easing:easings.easeInOutQuart},
        onChange:(a)=>
        {
            const Wprogress = parseInt(parseInt(parseFloat(a.value.width) * 100)/(AnimatedWidth))
            //console.log(Wprogress)

            onCurrentlyAnimationProgress&& onCurrentlyAnimationProgress(undefined,Wprogress,undefined) 
        }
    })

    const SizeHeightAnimation = useSpring(
        {
            to: {height:AnimatedHeight},
            config:{friction:10,easing:easings.easeInOutQuart},
            onChange:(a)=>
            {
                const Hprogress = parseInt(parseInt(parseFloat(a.value.height) * 100)/(AnimatedHeight))
                //console.log(Wprogress)
    
                onCurrentlyAnimationProgress&& onCurrentlyAnimationProgress(undefined,undefined,Hprogress) 
            }
        })

    return (
        <animated.div
        style={Object.assign(
            {width:'max-content',height:'max-content', cursor:'pointer'},
            animate!=false && AnimatedHeight!=undefined && SizeHeightAnimation,
            animate!=false && AnimatedWidth!=undefined && SizeWidthAnimation,
            animate!=false && scale!=undefined&& ScaleAnimation,
            //OpacityAnimation,
            style,
            show == false && {transform:'scale(0)'},
        )}
        onMouseOver={()=>OnHoverIn&& OnHoverIn()}
        onMouseOut={()=>OnHoverOut&& OnHoverOut()}
        onClick={()=>onClick&& onClick()}
        >
            {children}
        </animated.div>
    )
}

export default Button