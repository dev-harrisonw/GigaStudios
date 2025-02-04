import PropTypes from "prop-types";
import React from 'react';
import Script from 'next/script';

const SEO = ({ title }) => {
    return (
        <>
            {/* Meta Tags */}
            <meta charSet="utf-8" />
            <title>{title} || GigaStudios - Development Studio</title>
            <meta name="robots" content="noindex, follow" />
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