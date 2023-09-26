'use client';

import { FiX } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';

const MobileMenu = ({ show, onClose }) => {


    // useEffect(() => {
    //     if (typeof document !== 'undefined') {
    //         var elements = window?.document?.querySelectorAll('.popup-mobile-menu .has-droupdown > a');
    //         var elementsTwo = document.querySelectorAll('.popup-mobile-menu .with-megamenu > a');
    //         for (var i in elements) {
    //             if (elements.hasOwnProperty(i)) {
    //                 elements[i].onclick = function () {
    //                     this.parentElement.querySelector('.submenu').classList.toggle("active");
    //                     this.classList.toggle("open");
    //                 };
    //             }
    //         }

    //         for (var i in elementsTwo) {
    //             if (elementsTwo.hasOwnProperty(i)) {
    //                 elementsTwo[i].onclick = function () {
    //                     this.parentElement.querySelector('.rn-megamenu').classList.toggle("active");
    //                     this.classList.toggle("open");
    //                 };
    //             }
    //         }
    //     }
    // }, [show, onClose]);
    return (
        <div className={`popup-mobile-menu ${show ? "active" : ""}`}>
            <div className="inner">
                <div className="header-top">
                    <Logo
                        image={`/images/logo/logo.png`}
                        image2={`/images/logo/logo-dark.png`}
                    />
                    <div className="close-menu">
                        <span className="close-button" onClick={onClose}><FiX /></span>
                    </div>
                </div>
                <Nav onClose={onClose} />
            </div>
        </div>
    );
};
export default MobileMenu;