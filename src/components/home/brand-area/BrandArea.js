import BrandTwo from "@/elements/brand/BrandTwo";
import SectionTitle from "@/elements/sectionTitle/SectionTitle";

const BrandArea = () => {
  return (
    <div className="rwt-brand-area rn-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="Awesome Clients"
              title="Join our growing list of clients!"
              description="There's a reason so many choose us!"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt--10">
            <BrandTwo brandStyle="brand-style-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;