import TitleSection from "@/components/shared/TitleSection";
import React from "react";
import ServiceItem from "./ServiceItem";
import MainLayout from "@/components/layout/MainLayout";
import IndustrySection from "@/components/Home/IndustrySection";
import ConsultSection from "@/components/shared/ConsultSection";
import ServiceSection from "./ServiceSection";

const Service = () => {
  return (
    <MainLayout>
      <div className="bgPic">
        <ServiceItem />
        <IndustrySection />
        <ServiceSection />
        <ConsultSection />
      </div>
    </MainLayout>
  );
};

export default Service;
