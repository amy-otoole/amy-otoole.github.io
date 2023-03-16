import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { AboutStyles } from "./AboutStyles";
import productsBanner from "../../../public/assets/images/backgrounds/products-hero.png";
import React from "react";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import logoImage from "../../../public/assets/images/backgrounds/logo-with-background.png";
import BionicReading from "../../components/BionicReading/BionicReading";

const About = () => {
  return (
    <AboutStyles>
      <HeroBanner
        heroBannerImage={productsBanner}
        heroBannerHeading="About Us"
        heroBannerClass={"heroBanner"}
      />
      <SkinnyBanner bannerHeading="Established 2023" />
      <img className="logo-image" src={logoImage} />
      <BionicReading
        as={"p"}
        text={
          "Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content."
        }
      />
    </AboutStyles>
  );
};

export default About;
