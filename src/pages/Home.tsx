import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import DiscoverBannerImage from "../../public/assets/images/backgrounds/discover-banner.png";
import SkinnyBanner from "../components/SkinnyBanner/SkinnyBanner";
import ItemCards from "../components/ItemCards/ItemCards";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import DiscoverBanner from "../components/DiscoverBanner/DiscoverBanner";
import FlipHero from "../../public/assets/images/backgrounds/flip-hero.png";

const Home = () => {
  return (
    <>
      <HeroBanner
        heroBannerImage={FlipHero}
        heroBannerHeading="Check Out Our Winter Sale"
        heroBannerText="Save up to £200 on our pay monthly 100GB data plans. Must end 27th April 2023."
        heroBannerButtonClick={"/products"}
        heroBannerButtonText="See Deals"
      />
      <SkinnyBanner bannerHeading="Top Picks" />
      <ItemCards itemCardDataEnd={4} />
      <SkinnyBanner bannerHeading="Discover More" />
      <PromoBanner />
      <SkinnyBanner bannerHeading="Discover More" />
      <DiscoverBanner
        discoverBannerImage={DiscoverBannerImage}
        discoverBannerText="ho"
        discoverBannerTitle="hi"
      />
    </>
  );
};
export default Home;
