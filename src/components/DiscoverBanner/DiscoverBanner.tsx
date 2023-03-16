import React from "react";
import { DiscoverBannerStyles } from "./DiscoverBannerStyles";
import BionicReading from "../BionicReading/BionicReading";

interface DiscoverBannerProps {
  discoverBannerImage: string;
  discoverBannerTitle: string;
  discoverBannerText: string;
}
const DiscoverBanner = ({
  discoverBannerImage,
  discoverBannerTitle,
  discoverBannerText,
}: DiscoverBannerProps) => {
  return (
    <DiscoverBannerStyles>
      <img src={discoverBannerImage} alt="Discover More banner" />
        <BionicReading text={discoverBannerTitle} as={"h1"}/>
        <BionicReading text={discoverBannerText} as={"p"}/>
    </DiscoverBannerStyles>
  );
};
export default DiscoverBanner;
