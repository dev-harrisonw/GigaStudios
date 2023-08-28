import PropTypes from "prop-types";
import React from 'react'


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>{title} || GigaStudios - Development Studio</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="GigaStudios – Development Studio" />
            <meta name="keywords" content="GigaStudios, Development, Website Development, App Development, Software Development, Software" />
            <meta name="author" content="Harrison Warburton" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;


