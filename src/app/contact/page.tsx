import TitleSection from "@/components/shared/TitleSection";
import React from "react";
import ContactSection from "./ContactSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "@/components/layout/MainLayout";
import ConsultSection from "@/components/shared/ConsultSection";

const Contact = () => {
  return (
    <MainLayout>
      <div>
        <ContactSection />
        <ConsultSection />
      </div>
    </MainLayout>
  );
};

export default Contact;
