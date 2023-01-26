import React from 'react';
import { FiGlobe, AiOutlineMobile, BiBrain, ImCogs } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiGlobe />,
        title: 'Awarded Design',
        description: 'There are many variations variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: <AiOutlineMobile />,
        title: 'Design & Creative',
        description: 'Passages there are many variations variations  of of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: <BiBrain />,
        title: 'App Development',
        description: 'Variations There are many variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: <ImCogs />,
        title: 'Maintenace/Support',
        description: 'Variations There are many variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-2 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;