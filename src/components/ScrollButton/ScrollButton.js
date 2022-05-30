import React, {useState} from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa';
import { Button } from './ScrollButtonStyles';

const ScrollButton = () =>{

    const [visible, setVisible] = useState(false) 

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 600){
            setVisible(true)
        }
        else if (scrolled <= 600){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };
    if (typeof window !== "undefined") {
        // browser code
        window.addEventListener('scroll', toggleVisible);
      }
    

    return (
        <Button>
        <FaAngleDoubleUp onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}} />
        </Button>
    );
}

export default ScrollButton;
