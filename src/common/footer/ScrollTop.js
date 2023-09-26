'use client';

import { useEffect, useState } from 'react';
import { FiChevronUp } from "react-icons/fi";
import Blury from '../Blury';


const ScrollTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            }
            else if (scrolled <= 300) {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div
                className="rn-back-top"
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
            ><FiChevronUp /></div>
            <Blury />
        </>
    );
};

export default ScrollTop;