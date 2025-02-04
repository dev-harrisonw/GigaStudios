// Remove "use client" directive
import PortfolioOne from "@/elements/portfolio/PortfolioOne";
import SectionTitle from "@/elements/sectionTitle/SectionTitle";
import Head from "next/head"; // Import Head for modifying the document head
import { useEffect } from "react"; // Import useEffect for tracking page views
import { promises as fs } from "fs";

export const metadata = {
  title: "GigaStudios Portfolio | Showcasing Development Mastery",
  description:
    "Explore GigaStudios' portfolio, a testament to our prowess in website, app, and software development. Dive into a collection of projects that reflect our commitment to delivering cutting-edge digital solutions.",
  alternates: {
    canonical: "https://www.gigastudios.co.uk/portfolio",
  },
};

const PortfolioPage = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/data/portfolio/PortfolioData.json",
    "utf8"
  );
  const data = JSON.parse(file);

  useEffect(() => {
    // Tracking page view for Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-RQ96RJ4M5S', {
        page_path: '/portfolio', // Update this to the current page path
      });
    }
  }, []);

  return (
    <>
      <Head>
        {/* Google Tag Manager script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RQ96RJ4M5S"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQ96RJ4M5S', {
              page_path: '/portfolio', // Ensure this matches the page path
            });
          `}
        </script>
      </Head>
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
            <PortfolioOne
              Column="col-lg-6 col-md-6 col-sm-12 col-12 mt--30 portfolio"
              PortfolioData={data}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
