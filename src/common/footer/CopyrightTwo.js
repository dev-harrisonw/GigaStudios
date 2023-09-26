import Link from 'next/link';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const CopyrightTwo = () => {
    return (
        <div className="copyright-area copyright-style-one variation-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 mt_sm--20">
                        <div className="copyright-center text-center">
                            <ul className="social-icon social-default color-lessdark justify-content-center">
                                <li><Link href="facebook.com"><FiFacebook /></Link></li>
                                <li><Link href="twitter.com"><FiTwitter /></Link></li>
                                <li><Link href="https://www.instagram.com/gigastudiosltd"><FiInstagram /></Link></li>
                                <li><Link href="https://www.linkedin.com/company/gigastudios/"><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
                        <div className="copyright-right text-center text-lg-right">
                            <p className="copyright-text">Copyright All rights reserved © {new Date().getFullYear()} GigaStudios Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CopyrightTwo;