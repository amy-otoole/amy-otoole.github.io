import React from "react";
import { DiscoverBannerStyles } from "./DiscoverBannerStyles";
import BionicReading from "../BionicReading/BionicReading";

interface DiscoverBannerProps {
  discoverBannerImage: string;
  discoverBannerTitle: string;
  discoverBannerText: string;
  discoverImage?: string;
  discoverImageAlt?: string;
}
const DiscoverBanner = ({
  discoverBannerImage,
  discoverBannerTitle,
  discoverBannerText,
  discoverImage,
  discoverImageAlt,
}: DiscoverBannerProps) => {
  return (
    <DiscoverBannerStyles>
      <img src={discoverBannerImage} alt="Discover More banner" />
      <img src={discoverImage} alt={discoverImageAlt} className="logo" />
      <BionicReading text={discoverBannerTitle} as={"h1"} />
      <BionicReading text={discoverBannerText} as={"p"} />
    </DiscoverBannerStyles>
  );
};
export default DiscoverBanner;
