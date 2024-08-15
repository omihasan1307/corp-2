import TitleSection from "@/components/shared/TitleSection";
import React from "react";
import AboutPage from "./AboutPage";
import MainLayout from "@/components/layout/MainLayout";
import ConsultSection from "@/components/shared/ConsultSection";
import AboutFirstSection from "./AboutFirstSection";
import AboutSecondSection from "./AboutSecondSection";
import AboutSwiperSection from "./AboutSwiperSection";

const About = () => {
  return (
    <MainLayout>
      <AboutFirstSection />
      <AboutSwiperSection />
      <AboutSecondSection />
      <ConsultSection />
      {/* <AboutPage /> */}
    </MainLayout>
  );
};

export default About;
