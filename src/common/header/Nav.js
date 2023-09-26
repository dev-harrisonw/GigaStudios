import Link from 'next/link';

const Nav = ({ onClose }) => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link onClick={onClose} href="/">Home</Link>
                {/* <ul className="submenu">
                    <li><Link href="/business-consulting">Business Consulting</Link></li>
                    <li><Link href="/business-consulting-2">Business Consulting 02</Link></li>
                    <li><Link href="/corporate">Corporate</Link></li>
                    <li><Link href="/business">Business</Link></li>
                    <li><Link href="/digital-agency">Digital Agency</Link></li>
                    <li><Link href="/finance">Finance</Link></li>
                    <li><Link href="/company">Company</Link></li>
                    <li><Link href="/marketing">Development Studio</Link></li>
                    <li><Link href="/travel-agency">Travel Agency</Link></li>
                    <li><Link href="/consulting">Consulting</Link></li>
                    <li><Link href="/seo-agency">SEO Agency</Link></li>
                    <li><Link href="/personal-portfolio">Personal Portfolio</Link></li>
                    <li><Link href="/event-conference">Event Conference</Link></li>
                    <li><Link href="/creative-portfolio">Creative Portfolio</Link></li>
                    <li><Link href="/freelancer">Freelancer</Link></li>
                    <li><Link href="/international-consulting">International Consulting</Link></li>
                    <li><Link href="/startup">Startup</Link></li>
                    <li><Link href="/web-agency">Web Agency</Link></li>
                </ul> */}
            </li>

            <li><Link onClick={onClose} href="/about-us">About</Link></li>

            <li><Link onClick={onClose} href="/coming-soon">Blog</Link>
                {/* <ul className="submenu">
                    <li><Link href="/blog-grid">Blog Grid</Link></li>
                    <li><Link href="/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
                    <li><Link href="/blog-list-view">Blog List View</Link></li>
                    <li><Link href="/blog-list-sidebar">Blog List View Sidebar</Link></li>
                </ul> */}
            </li>

            <li><Link onClick={onClose} href="/portfolio">Portfolio</Link>
                {/* <ul className="submenu">
                    <li><Link href="/portfolio">Portfolio Default</Link></li>
                    <li><Link href="/portfolio-three-column">Portfolio Three Column</Link></li>
                    <li><Link href="/portfolio-full-width">Portfolio Full Width</Link></li>
                    <li><Link href="/portfolio-grid-layout">Portfolio Grid Layout</Link></li>
                    <li><Link href="/portfolio-box-layout">Portfolio Box Layout</Link></li>
                </ul> */}
            </li>

            <li className="has-droupdown"><Link onClick={onClose} href="/contact">Contact</Link></li>
        </ul>
    );
};
export default Nav;
