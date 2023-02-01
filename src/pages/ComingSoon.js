import React from 'react'
import Layout from "../common/Layout";
import { FaSistrix } from "react-icons/fa";

const ComingSoon = () => {
    return (
        <Layout>
            <div className="error-area ptb--200 ptb_sm--60 ptb_md--80">
                <div className="container">
                    <div className="row align-item-center">
                        <div className="col-lg-12">
                            <div className="error-inner">
                                <h1 className="title" class="title theme-gradient">503</h1>
                                <h2 className="title">Coming Soon...</h2>
                                <p className="description">GigaStudio's blog will be coming to screens near you!</p>
                                <form action="#" className="blog-search">
                                    <input type="text" placeholder="Search Here..." />
                                    <button className="search-button"><FaSistrix /></button>
                                </form>
                                <div className="view-more-button">
                                    <a className="btn-default" href="https://www.gigastudios.co.uk/">Go Back Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ComingSoon;