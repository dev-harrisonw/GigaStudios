import React from 'react';
import HeaderOne from "./header/HeaderOne";
import HeaderTopBar from "./header/HeaderTopBar";
import FooterThree from "./footer/FooterThree";

const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <FooterThree />
            </main>
        </>
    )
}
export default Layout;
