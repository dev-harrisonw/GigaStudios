import Script from "next/script";
import BrandArea from "@/components/home/brand-area/BrandArea";
import PortfolioArea from "@/components/home/portfolio-area/PortfolioArea";
import ServicesArea from "@/components/home/services-area/ServicesArea";
import SliderArea from "@/components/home/slider-area/SliderArea";
import AboutThree from "@/elements/about/AboutThree";
import Separator from "@/elements/separator/Separator";

export const metadata = {
  title: "GigaStudios - Your Hub for Exceptional Development Services",
  description:
    "Welcome to GigaStudios, where innovation meets expertise. Explore our comprehensive development services, including website, app, and software development. Your journey to digital excellence starts here.",
  alternates: {
    canonical: "https://www.gigastudios.co.uk",
  },
};

export default function Home() {
  return (
    <main>
      {/* Google Analytics Tracking */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RQ96RJ4M5S"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RQ96RJ4M5S', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <SliderArea />
      <Separator />
      <ServicesArea />
      <Separator />
      <PortfolioArea />
      <Separator />
      <AboutThree />
      <Separator />
      <BrandArea />
    </main>
  );
}
