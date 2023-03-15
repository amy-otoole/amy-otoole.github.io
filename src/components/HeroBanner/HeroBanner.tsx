import React from "react";
import HeroBannerStyles from "./HeroBannerStyles";
import { NavButton } from "../Button/Button";
import BionicReading from "../BionicReading/BionicReading";

interface HeroBannerProps {
  heroBannerHeading?: string;
  heroBannerText?: string;
  heroBannerImage?: string;
  heroBannerButtonText?: string;
  heroBannerButtonClick?: string;
  heroBannerClass?: string;
}

const HeroBanner = ({
  heroBannerHeading,
  heroBannerText,
  heroBannerImage,
  heroBannerButtonText,
  heroBannerButtonClick,
  heroBannerClass,
}: HeroBannerProps) => {
  return (
    <HeroBannerStyles className={heroBannerClass}>
      <img src={heroBannerImage} alt="Hero" />
      <BionicReading text={heroBannerHeading} as={"h1"} />
      <BionicReading text={heroBannerText} as={"p"} />
      <NavButton
        buttonText={<BionicReading text={heroBannerButtonText} as={"a"} />}
        buttonClick={heroBannerButtonClick}
      />
    </HeroBannerStyles>
  );
};
export default HeroBanner;
