'use client';

import Link from 'next/link';
import ScrollAnimation from "react-animate-on-scroll";
import { AiOutlineMobile } from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { ImCogs } from "react-icons/im";

const ServiceList = [
    {
        icon: <FiGlobe />,
        title: 'Website Development',
        description: 'Our team will create a website that meets your business needs and helps you achieve your goals.'
    },
    {
        icon: <AiOutlineMobile />,
        title: 'App Development',
        description: 'Transform your app ideas into reality with our custom app development services.<br/><br/><br/>'
    },
    {
        icon: <BiBrain />,
        title: 'Bespoke',
        description: 'Stand out from the competition with our personalized bespoke development services.<br/><br/>'
    },
    {
        icon: <ImCogs />,
        title: 'Maintenace',
        description: 'Ensure that your website or application is always running smoothly with our comprehensive maintenance.'
    },
];

const ServiceOne = ({ textAlign, serviceStyle }) => {
    return (
        <div className="row row--15 service-wrapper">
            {ServiceList.map((val, i) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link href="#service" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    );
};
export default ServiceOne;