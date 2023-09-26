'use client';

import { FiCheck } from "react-icons/fi";
import ReactTyped from 'react-typed';
import VideoTwo from '../video/VideoTwo';


const PopupData = [
    {
        id: "01",
        image: "./images/bg/bg-image-4.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=',
        ],
    }
];

const AboutFour = ({ image }) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-6">
                        {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>
                                <VideoTwo imagename={`${image}`} galleryItem={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title">We specialize in <br />
                                    <span className="title theme-gradient"><ReactTyped
                                        strings={[
                                            "Web Development.",
                                            "App Development.",
                                            "Bespoke Development.",
                                            "Maintenance & Support",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    /></span></h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Committed to Quality and Innovation</h4>
                                            <p className="text">Our unwavering commitment to quality and innovation sets us apart, ensuring that every project we undertake exceeds expectations and delivers exceptional results.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Expert Development and Design Team.</h4>
                                            <p className="text">GigaStudios delivers unparalleled solutions with expert development and design, exceeding the unique needs of each and every client.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="about-btn mt--30">
                                    <a className="btn-default" href="/">Our Story</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFour;
