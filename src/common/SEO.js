import PropTypes from "prop-types";
import React from 'react';
import Script from 'next/script';

const SEO = ({ title }) => {
    return (
        <>
            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-RQ96RJ4M5S"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-RQ96RJ4M5S');
                    `,
                }}
            />

            {/* Meta Tags */}
            <meta charSet="utf-8" />
            <title>{title} || GigaStudios - Development Studio</title>
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="noindex, follow" />
            <meta name="description" content="GigaStudios – Development Studio" />
            <meta name="keywords" content="
                GigaStudios, 
                Web Development Manchester, 
                App Development Manchester, 
                Software Development Manchester, 
                Custom Software Solutions, 
                Website Design Manchester, 
                Digital Agency Manchester, 
                E-commerce Development, 
                Responsive Web Design, 
                SEO Services Manchester, 
                Digital Marketing Manchester, 
                Harrison Warburton, 
                Giga Studios, 
                Manchester Tech Agency, 
                Software Solutions UK
            "/>
            <meta name="author" content="Harrison Warburton" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"></link>
        </>
    );
};

SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;