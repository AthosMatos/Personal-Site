import React, { useEffect, useState } from "react"

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [scrollYValue, setScrollYValue] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
   
        setScrollDirection(direction);
        setScrollYValue(scrollY);
        
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollYValue]);
  
    return scrollYValue;
  };

const Header = ({style,children}) =>
{
    const scrollYValue = useScrollDirection();

    useEffect(()=>
    {
        console.log('style',children)
    },[])
    
    return (
        <div 
        className='header' 
        style = 
        {Object.assign({
            top: scrollYValue > window.outerHeight * 0.2 && '-2rem'},
            style
        )}>
            {children}
        </div>
    )
}

export default Header