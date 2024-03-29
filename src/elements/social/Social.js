import Link from 'next/link';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Layout from "../../common/Layout";
import SEO from "../../common/SEO";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import Separator from "../separator/Separator";



const Social = () => {
    return (
        <>
            <SEO title="Social Share || GigaStudios - Development Agency" />
            <Layout>
                <BreadcrumbOne
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Social Share"
                />
                <div className="main-content">
                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Our Social Share"
                                        title="You can Customize All."
                                        description=""
                                    />
                                </div>
                            </div>
                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default">
                                        <li><Link href="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link href="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link href="https://www.instagram.com/gigastudiosltd"><FiInstagram /></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/gigastudios/"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />


                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Transparent With Border"
                                        title="Social Share."
                                        description=""
                                    />
                                </div>
                            </div>

                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default transparent-with-border">
                                        <li><Link href="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link href="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link href="https://www.instagram.com/gigastudiosltd"><FiInstagram /></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/gigastudios/"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />



                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Gradient Style"
                                        title="Social Share."
                                        description=""
                                    />
                                </div>
                            </div>

                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default with-gradient">
                                        <li><Link href="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link href="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link href="https://www.instagram.com/gigastudiosltd"><FiInstagram /></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/gigastudios/"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Bg Primary Color"
                                        title="Social Share."
                                        description=""
                                    />
                                </div>
                            </div>

                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default with-bg-primary">
                                        <li><Link href="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link href="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link href="https://www.instagram.com/gigastudiosltd"><FiInstagram /></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/gigastudios/"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-social-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Bg Primary Color"
                                        title="Social Share."
                                        description=""
                                    />
                                </div>
                            </div>

                            <div className="row mt--30">
                                <div className="col-lg-12">
                                    <ul className="social-icon social-default icon-naked">
                                        <li><Link href="facebook.com"><FiFacebook /></Link></li>
                                        <li><Link href="twitter.com"><FiTwitter /></Link></li>
                                        <li><Link href="https://www.instagram.com/gigastudiosltd"><FiInstagram /></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/gigastudios/"><FiLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />



                </div>
            </Layout>
        </>
    );
};
export default Social;