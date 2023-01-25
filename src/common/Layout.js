import React from 'react';
import HeaderOne from "./header/HeaderOne";
import HeaderTopBar from "./header/HeaderTopBar";
import FooterTwo from "./footer/FooterTwo";
import Copyright from "./footer/Copyright";

const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default Layout;
