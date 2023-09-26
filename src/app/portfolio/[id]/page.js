import Error from "@/components/error/Error";
import PortfolioDetailsContent from "@/elements/portfolio/PortfolioDetailsContent";
import PortfolioData from "../../../data/portfolio/PortfolioData.json";

export const generateMetadata = ({ params, }, parent) => {
  const id = params.id;

  // fetch data
  const data = PortfolioData.find(portfolio => parseInt(portfolio.id) === parseInt(id));

  return {
    title: data?.title || 'Not Found || GigaStudios - Development Studio',
  };
};

const PortfolioDetails = ({ params }) => {

  const { id } = params;

  const data = PortfolioData.find(portfolio => parseInt(portfolio.id) === parseInt(id));

  if (!data?.id) return <Error />;

  return (
    <div>
      <PortfolioDetailsContent data={data} />
    </div>
  );
};

export default PortfolioDetails;