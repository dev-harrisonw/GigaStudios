import AccordionOne from '../accordion/AccordionOne';
;

const AboutThree = () => {
    return (
        <div className="rn-about-area about-style-3 rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="inner">
                            <div className="section-title">
                                <h4 className="subtitle">
                                    <span className="theme-gradient">FAQs</span>
                                </h4>
                                <h2 className="title mb--40">Any Questions?</h2>
                            </div>
                            <AccordionOne customStyle="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutThree;
