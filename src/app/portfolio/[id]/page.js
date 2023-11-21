import Error from "@/components/error/Error";
import PortfolioDetailsContent from "@/elements/portfolio/PortfolioDetailsContent";
import PortfolioData from "../../../data/portfolio/PortfolioData.json";
import { promises as fs } from "fs";

// export const generateMetadata = ({ params }, parent) => {
//   const id = params.id;

//   // fetch data
//   const data = PortfolioData.find(
//     (portfolio) => parseInt(portfolio.id) === parseInt(id)
//   );

//   return {
//     title: data?.title || "Not Found || GigaStudios - Development Studio",
//   };
// };

export async function generateStaticParams() {
  const posts = await fs.readFile(
    process.cwd() + "/src/data/portfolio/PortfolioData.json",
    "utf8"
  );
  const data = JSON.parse(posts);
  return data.map((post) => ({
    id: post.id.toString(),
  }));
}

async function getPortfolio(params) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/portfolio/PortfolioData.json",
    "utf8"
  );
  const data = PortfolioData.find(
    (portfolio) => parseInt(portfolio.id) === parseInt(params.id)
  );
  return data;
}

const PortfolioDetails = async ({ params }) => {
  const data = await getPortfolio(params);

  if (!data?.id) return <Error />;

  return (
    <div>
      <PortfolioDetailsContent data={data} />
    </div>
  );
};

export default PortfolioDetails;
