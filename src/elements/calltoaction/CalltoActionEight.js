import React from 'react';
import { FiArrowRight } from "react-icons/fi";
const callToActionData = {
    title: "Ready to create your digital footprint?",
    subtitle: "Unleash the power of the web today",
    btnText: "Enquire Now",
}

const CalltoActionEight = () => {
    return (
        <div className="rn-callto-action rn-call-to-action style-8 content-wrapper">
            <div className="container">
                <div className="row row--0 align-items-center ">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <h2 className="title">{callToActionData.title}</h2>
                                <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                <div className="call-to-btn text-center mt--30">
                                    <a className="btn-default btn-icon" target="_blank" href="https://calendly.com/gigastudios/30min?month=2023-02">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionEight;