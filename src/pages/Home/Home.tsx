import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import DiscoverBannerImage from "../../../public/assets/images/backgrounds/discover-banner.png";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import ItemCards from "../../components/ItemCards/ItemCards";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import DiscoverBanner from "../../components/DiscoverBanner/DiscoverBanner";
import FlipHero from "../../../public/assets/images/backgrounds/flip-hero.png";
import prideLogo from "../../../public/assets/images/backgrounds/rewards-logo.svg";
import HomeStyles from "./HomeStyles";

const Home = () => {
  return (
    <HomeStyles>
      <HeroBanner
        heroBannerImage={FlipHero}
        heroBannerHeading="Check Out Our Winter Sale"
        heroBannerText="Save up to £200 on our pay monthly 100GB data plans. Must end 27th April 2023."
        heroBannerButtonClick={"/products"}
        heroBannerButtonText="See Deals"
      />
      <SkinnyBanner bannerHeading="Top Picks" />
      <ItemCards itemCardDataEnd={4} itemCardClass="item-card-container" />
      <SkinnyBanner bannerHeading="Discover More" />
      <PromoBanner />
      <SkinnyBanner bannerHeading="Pride Rewards" />
      <DiscoverBanner
        discoverBannerImage={DiscoverBannerImage}
        discoverImage={prideLogo}
        discoverBannerText="Purchase any sim only or handset plans and receive instant access to our Pride Rewards scheme. Pride Rewards brings you exclusive offers to top high street shops and exclusive access to competitions."
        discoverBannerTitle=" Pride Rewards"
      />
    </HomeStyles>
  );
};
export default Home;
