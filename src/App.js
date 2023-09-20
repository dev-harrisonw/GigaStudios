import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 


import CategoryList from "./pages/CategoryList";
import TagList from "./pages/TagList";
import Author from "./pages/Author";
import AboutUs from "./pages/AboutUs";
import Index from "./pages/Index";

// Elements import Here 


import Portfolio from "./elements/portfolio/Portfolio";
import portfolioThreeColumn from "./elements/portfolio/PortfolioThreeColumn";
import PortfolioFullWidth from "./elements/portfolio/PortfolioFullWidth";
import PortfolioGrid from "./elements/portfolio/PortfolioGrid";
import PortfolioBoxLayout from "./elements/portfolio/PortfolioBoxLayout";
import PortfolioDetails from "./pages/PortfolioDetails";
import Contact from "./elements/contact/Contact";


import BlogGridView from "./components/blog/BlogGridView";
import BlogListView from "./components/blog/BlogListView";
import BlogGridSidebar from "./components/blog/BlogGridSidebar";
import BlogListSidebar from "./components/blog/BlogListSidebar";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";
import ComingSoon from "./pages/ComingSoon";


// Import Css Here 
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Index}/>
                    <Route path={`${process.env.PUBLIC_URL + "/index"}`} exact component={Index}/>
                    <Route path={`${process.env.PUBLIC_URL + "/coming-soon"}`} exact component={ComingSoon}/>

                    {/* Blog Part  */}
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} exact component={BlogGridView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-view"}`} exact component={BlogListView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid-sidebar"}`} exact component={BlogGridSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-sidebar"}`} exact component={BlogListSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`} exact component={BlogDetails}/>
                    <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} exact component={CategoryList}/>
                    <Route path={`${process.env.PUBLIC_URL + "/archive/:slug"}`} exact component={Author}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} exact component={TagList}/>

                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} exact component={AboutUs}/>

                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>
                    
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`} exact component={Portfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-three-column"}`} exact component={portfolioThreeColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-full-width"}`} exact component={PortfolioFullWidth}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-layout"}`} exact component={PortfolioGrid}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-box-layout"}`} exact component={PortfolioBoxLayout}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-details/:id"}`} exact component={PortfolioDetails}/>


                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
