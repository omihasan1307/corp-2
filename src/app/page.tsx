import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import MainLayout from "@/components/layout/MainLayout";
import ServicesHomeSection from "@/components/Home/ServicesHomeSection";
import BlogSection from "@/components/Home/BlogSection";
import TopNavbar from "@/components/Navbar/TopNavbar";
import AboutFirstSection from "./about/AboutFirstSection";
import ConsultSection from "@/components/shared/ConsultSection";
import AboutSecondSection from "./about/AboutSecondSection";
import IndustrySection from "@/components/Home/IndustrySection";

export default function Home() {
  return (
    <MainLayout>
      <TopNavbar />
      <Navbar />
      <div className="lg:relative ">
        <div>
          <HeroSection />
        </div>
        <div className="lg:absolute  lg:-bottom-60 mx-auto w-full">
          <ServicesHomeSection />
        </div>
      </div>
      <div className="mt-72 ">
        <AboutFirstSection />
        <ConsultSection />
        <AboutSecondSection />
        <IndustrySection />
        <BlogSection />
      </div>
    </MainLayout>
  );
}
