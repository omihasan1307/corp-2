import Image from "next/image";
import AboutPage from "./about/AboutPage";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import MainLayout from "@/components/layout/MainLayout";
import ServicesHomeSection from "@/components/Home/ServicesHomeSection";
import BlogSection from "@/components/Home/BlogSection";
import GraphSection from "@/components/Home/GraphSection";
import TopNavbar from "@/components/Navbar/TopNavbar";

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
      <div className="mt-52 ">
        <AboutPage />
        <GraphSection />
        <BlogSection />
      </div>
    </MainLayout>
  );
}
