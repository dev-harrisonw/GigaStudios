import PortfolioOne from '@/elements/portfolio/PortfolioOne';
import SectionTitle from '@/elements/sectionTitle/SectionTitle';

export const metadata = {
  title: 'Portfolio || GigaStudios - Development Studio'
};

const PortfolioPage = () => {
  return (
    <div className="main-content">
      <div className="rwt-portfolio-area rn-section-gap">
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
          <PortfolioOne Column="col-lg-6 col-md-6 col-sm-12 col-12 mt--30 portfolio" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;