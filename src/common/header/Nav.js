import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="https://www.gigastudios.co.uk/">Home</Link>
                {/* <ul className="submenu">
                    <li><Link to="/business-consulting">Business Consulting</Link></li>
                    <li><Link to="/business-consulting-2">Business Consulting 02</Link></li>
                    <li><Link to="/corporate">Corporate</Link></li>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="/digital-agency">Digital Agency</Link></li>
                    <li><Link to="/finance">Finance</Link></li>
                    <li><Link to="/company">Company</Link></li>
                    <li><Link to="/marketing">Development Studio</Link></li>
                    <li><Link to="/travel-agency">Travel Agency</Link></li>
                    <li><Link to="/consulting">Consulting</Link></li>
                    <li><Link to="/seo-agency">SEO Agency</Link></li>
                    <li><Link to="/personal-portfolio">Personal Portfolio</Link></li>
                    <li><Link to="/event-conference">Event Conference</Link></li>
                    <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                    <li><Link to="/freelancer">Freelancer</Link></li>
                    <li><Link to="/international-consulting">International Consulting</Link></li>
                    <li><Link to="/startup">Startup</Link></li>
                    <li><Link to="/web-agency">Web Agency</Link></li>
                </ul> */}
            </li>
            
            <li><Link to="/about-us">About</Link></li>

            <li><Link to="/blog">Blog</Link>
                {/* <ul className="submenu">
                    <li><Link to="/blog-grid">Blog Grid</Link></li>
                    <li><Link to="/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
                    <li><Link to="/blog-list-view">Blog List View</Link></li>
                    <li><Link to="/blog-list-sidebar">Blog List View Sidebar</Link></li>
                </ul> */}
            </li>

            <li><Link to="/portfolio">Portfolio</Link>
                {/* <ul className="submenu">
                    <li><Link to="/portfolio">Portfolio Default</Link></li>
                    <li><Link to="/portfolio-three-column">Portfolio Three Column</Link></li>
                    <li><Link to="/portfolio-full-width">Portfolio Full Width</Link></li>
                    <li><Link to="/portfolio-grid-layout">Portfolio Grid Layout</Link></li>
                    <li><Link to="/portfolio-box-layout">Portfolio Box Layout</Link></li>
                </ul> */}
            </li>

            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
