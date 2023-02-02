import React from 'react';
import HeaderOne from "./header/HeaderOne";
import HeaderTopBar from "./header/HeaderTopBar";
import FooterThree from "./footer/FooterThree";
import Copyright from "./footer/Copyright";

const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <FooterThree />
                <Copyright />
            </main>
        </>
    )
}
export default Layout;
