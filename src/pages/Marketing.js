import React from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import FooterThree from '../common/footer/FooterThree';


import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ServiceOne from '../elements/service/ServiceOne';
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandTwo from '../elements/brand/BrandTwo';
import AboutThree from '../elements/about/AboutThree';
import PortfolioOne from "../elements/portfolio/PortfolioOne";


import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";

import { ReactComponent as MyIcon } from "./hero.svg";



const Marketing = () => {
    return (
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                
                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />


                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                <center><h1 className="title theme-gradient display-two">Development <br /> made<br /> {" "}
                                        <Typed
                                            strings={[
                                                "Effortless.",
                                                "Accessible.",
                                                "Affordable.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1></center>
                                    <center><p className="description">We help our clients succeed by creating stunning digital experiences, at a fraction of the price of our competition.</p></center>
                                    <center><div className="button-group">
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Previous Work <i className="icon"><FiArrowRight /></i></Link>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div></center>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <MyIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Services"
                                    title = "What we can do for you."
                                    description = "Choose from our innovative digital solutions to elevate your business to the next level."
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                                serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                                textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}


                <Separator />
                {/* Start Portfolio Area  */}
                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Previous Work"
                                    title = "Check our recent works!"
                                    description = "Experience our expertise through our portfolio."
                                />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-4 col-md-6 col-12 mt--30 portfolio"  />
                    </div>
                </div>
                {/* End Portfolio Area  */}

                <Separator />
                <AboutThree />
                <Separator />

                {/* Start Brand Area  */}
                <div className="rwt-brand-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Awesome Clients"
                                    title = "Join our growing list of clients!"
                                    description = "There's a reason so many choose us!"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandTwo brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                <FooterThree />

            </main>
        </>
    )
}

export default Marketing;
