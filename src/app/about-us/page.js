import AboutFour from "@/elements/about/AboutFour";
import BrandThree from "@/elements/brand/BrandThree";
import SectionTitle from "@/elements/sectionTitle/SectionTitle";
import Separator from "@/elements/separator/Separator";
import ServiceOne from "@/elements/service/ServiceOne";
import TeamOne from "@/elements/team/TeamOne";
import TimelineTwo from "@/elements/timeline/TimelineTwo";

export const metadata = {
  title: 'About Us || GigaStudios - Development Studio'
};

const AboutUs = () => {
  return (
    <div>
      {/* Start Slider Area  */}
      <div className="slider-area slider-style-1 height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/images/about/gradient.png)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner pt--80 text-center">
                <div>
                  <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's About Details.</span></h3>
                </div>
                <h1 className="title display-one">We are a<br /><h1 className="title display-one theme-gradient">Development Studio</h1><br />on a <h1 className="title display-one theme-gradient">mission.</h1></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Slider Area  */}


      {/* Start Service Area  */}
      <div className="service-area rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h3 className="title">Empowering Your Business with Cutting-Edge Technology:<br />Welcome to <span className="title theme-gradient">GigaStudios</span></h3>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="mb--10">GigaStudios is a web development and SaaS company that aims to deliver exceptional services to businesses of all sizes. Our team of experts are dedicated to delivering high-quality and innovative solutions that meet our clients' unique needs and goals. The company values are to make development effortless, accessible, and affordable; for our clients to create stunning digital experiences. At GigaStudios we help businesses reach the next level through cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      <AboutFour image="./images/about/contact-image.jpg" />

      {/* Start Brand Area  */}
      <div className="rwt-brand-area pb--60 pt--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt--10">
              <BrandThree brandStyle="brand-style-2" />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Area  */}

      <Separator />

      {/* Start Service Area  */}
      <div className="rn-service-area rn-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="Our Services"
                title="What we can do for you."
                description="Choose from our innovative digital solutions to elevate your business to the next level."
              />
            </div>
          </div>
          <ServiceOne
            serviceStyle="service__style--1 bg-color-blackest radius mt--25"
            textAlign="text-center"
          />
        </div>
      </div>
      {/* End Service Area  */}

      <Separator />

      <div className="rwt-timeline-area rn-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <TimelineTwo classVar="no-gradient" />
            </div>
          </div>
        </div>
      </div>


      <Separator />

      {/* Start Elements Area  */}
      <div className="rwt-team-area rn-section-gap">
        <div className="container">
          <div className="row mb--20">
            <div className="col-lg-12">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="Our Team"
                title="Meet our experts!"
                description=""
              />
            </div>
          </div>
          <TeamOne column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-default" />
        </div>
      </div>
      {/* End Elements Area  */}
    </div>
  );
};

export default AboutUs;