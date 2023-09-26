import SectionTitle from '@/elements/sectionTitle/SectionTitle';

const ServicesArea = () => {
  return (
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
        {/* <ServiceOne
          serviceStyle="service__style--1 bg-color-blackest radius mt--25"
          textAlign="text-center"
        /> */}
      </div>
    </div>
  );
};

export default ServicesArea;