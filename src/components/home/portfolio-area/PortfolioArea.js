import PortfolioOne from "@/elements/portfolio/PortfolioOne";
import SectionTitle from "@/elements/sectionTitle/SectionTitle";

const PortfolioArea = () => {
  return (
    <section id="portfolio">
      <div className="rwt-portfolio-area rn-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="Previous Work"
                title="Check our recent works!"
                description="Experience our expertise through our portfolio."
              />
            </div>
          </div>
          <PortfolioOne Column="col-lg-4 col-md-6 col-12 mt--30 portfolio" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;