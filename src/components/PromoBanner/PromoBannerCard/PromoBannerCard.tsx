import React from "react";
import { PromoBannerCardStyles } from "./PromoBannerCardStyles";

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
      <h1>{promoBannerTitle}</h1>
      <p>{promoBannerText}</p>
    </PromoBannerCardStyles>
  );
};
export default PromoBannerCard;
