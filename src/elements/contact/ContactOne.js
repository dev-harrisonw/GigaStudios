import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";

const ContactOne = () => {
  return (
    <>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rn-contact-address mt_dec--30">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Phone Number</h4>
                    <p>
                      <a href="tel:+447984980188">+44 7984 980188</a>
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p>
                      <a href="mailto:contact@gigastudios.co.uk">
                        contact@gigastudios.co.uk
                      </a>
                    </p>
                    <p>
                      <a href="mailto:me@harrisonwarburton.com">
                        me@harrisonwarburton.com
                      </a>
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Location</h4>
                    <p>
                      We don't currently have an office yet, but there's
                      something in the pipeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt--40 row--15">
        <div className="col-lg-7">
          <ContactForm formStyle="contact-form-1" />
        </div>
        <div className="col-lg-5 mt_md--30 mt_sm--30">
          <GoogleMapStyle />
        </div>
      </div>
    </>
  );
};
export default ContactOne;
