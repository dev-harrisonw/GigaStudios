import React from 'react';
const callToActionData = {
    title: "Ready to create your digital footprint?",
    subtitle: "Unleash the power of the web today",
    btnText: "Enquire Now",
}
const CalltoActionFour = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-4">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8">
                        <div className="inner">
                            <div className="content text-start">
                                <h2 className="title">{callToActionData.title}</h2>
                                <h6 className="subtitle">{callToActionData.subtitle}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="call-to-btn text-start text-lg-right">
                            <a className="btn-default" href="#">{callToActionData.btnText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionFour;