import BrandArea from "@/components/home/brand-area/BrandArea";
import PortfolioArea from "@/components/home/portfolio-area/PortfolioArea";
import ServicesArea from "@/components/home/services-area/ServicesArea";
import SliderArea from "@/components/home/slider-area/SliderArea";
import AboutThree from "@/elements/about/AboutThree";
import Separator from "@/elements/separator/Separator";

export const metadata = {
  title: 'Home || GigaStudios - Development Studio'
};

export default function Home() {
  return (
    <main >
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
