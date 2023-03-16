import React from "react";
import { PromoBannerCardStyles } from "./PromoBannerCardStyles";
import BionicReading from "../../BionicReading/BionicReading";

interface PromoBannerProps {
  promoBannerImage: string;
  promoBannerTitle: string;
  promoBannerText: string;
  smallCard?: boolean;
  className?: string;
  promoBannerAlt: string;
}

const PromoBannerCard = ({
  promoBannerImage,
  promoBannerTitle,
  promoBannerText,
  smallCard,
  promoBannerAlt,
}: PromoBannerProps) => {
  return (
    <PromoBannerCardStyles smallCard={smallCard}>
      <img src={promoBannerImage} alt={promoBannerAlt} />
      <BionicReading text={promoBannerTitle} as={"h1"}/>
      <BionicReading text={promoBannerText} as={"p"}/>
    </PromoBannerCardStyles>
  );
};
export default PromoBannerCard;
