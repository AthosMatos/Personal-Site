import React from "react"

const backgroundStyle = 
{
    height: '100vh',
    transition: 'all .3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const AnimatedBackground = ({children,backColor}) =>
{
    return (
        <div style={Object.assign
        (
            { backgroundColor: backColor ? backColor: 'white' },
            backgroundStyle,
        )}>
            {children}
        </div>
    )
}

export default AnimatedBackground