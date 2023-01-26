import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/serviice-01.jpg',
        title: 'Website Development',
        description: 'Our team will create a website that meets your business needs and helps you achieve your online goals.'
    },
    {
        image: '/images/service/serviice-02.jpg',
        title: 'App Development',
        description: 'Transform your app ideas into reality with our custom app development services.<br/><br/>'
    },
    {
        image: '/images/service/serviice-03.jpg',
        title: 'Bespoke Development',
        description: 'Stand out from the competition with our personalized bespoke development services.<br/>'
    },
    {
        image: '/images/service/serviice-04.jpg',
        title: 'Maintenance/Support',
        description: 'Ensure that your website or application is always running smoothly with our comprehensive maintenance and support plans.'
    }
]
const ServiceTwo = ({textAlign, cardStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`card-box ${cardStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <Link to="#service">
                                        <img src={`${val.image}`} alt="card Images" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h4 className="title mb--20"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                    <Link className="btn-default btn-small btn-border" to="#service">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceTwo;