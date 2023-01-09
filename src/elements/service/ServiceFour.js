import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: '1',
        title: 'Web Development',
        description: 'Build a professional website that stands out from the competition with our custom web development services. Our team will create a website that meets your business needs and helps you achieve your online goals.'
    },
    {
        icon: '2',
        title: 'App Development',
        description: 'Transform your app ideas into reality with our custom app development services. Our experienced team will bring your vision to life with a seamless user experience.'
    },
    {
        icon: '3',
        title: 'Bespoke Development',
        description: 'Stand out from the competition with our personalized bespoke development services. Our team will create a custom solution tailored to your business needs for maximum success.'
    },
    {
        icon: '4',
        title: 'Maintenance & Support',
        description: 'Ensure that your website or application is always running smoothly with our comprehensive maintenance and support services. Our team will keep your site or app up-to-date and fix any issues as they arise.'
    },
]

const ServiceFour = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                <div className="line"></div>
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFour;