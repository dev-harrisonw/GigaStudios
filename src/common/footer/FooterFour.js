import Link from 'next/link';
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import footerOne from "../../data/footer/footerOne.json";
import NewsletterOne from "./NewsletterOne";
import ScrollTop from "./ScrollTop";

const footerIntem = footerOne[0];
const footerIntemOne = footerOne[1];
const footerIntemTwo = footerOne[2];
const footerIntemThree = footerOne[3];
const footerIntemFour = footerOne[4];
const footerIntemFive = footerOne[5];

const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);

const FooterFour = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default no-border">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemOne.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexOneLink.map((data, index) => (
                                                <li key={index}><Link href={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemTwo.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexThreeLink.map((data, index) => (
                                                    <li key={index}><Link href={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemThree.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexTwoLink.map((data, index) => (
                                                <li key={index}><Link href={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemFour.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexTwoLink.map((data, index) => (
                                                <li key={index}><Link href={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemFive.title}</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">{footerIntemFive.subtitle}</h6>
                                        <ul className="social-icon social-default justify-content-start">

                                            <li><Link href="https://www.instagram.com/gigastudiosltd"><FiInstagram /></Link></li>
                                            <li><Link href="https://www.linkedin.com/company/gigastudios/"><FiLinkedin /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
                <NewsletterOne newsletetrStyle="rn-newsletter-default" extraClass="border-top-bottom" />
                <div className="copyright-area copyright-style-one no-border">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-left">
                                    <ul className="ft-menu link-hover">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-right text-center text-md-end">
                                    <p className="copyright-text">© GigaStudios {new Date().getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    );
};

export default FooterFour;
