import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { AboutStyles } from "./AboutStyles";
import productsBanner from "../../../public/assets/images/backgrounds/products-hero.png";
import React from "react";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import logoImage from "../../../public/assets/images/backgrounds/logo-with-background.png";

const About = () => {
  return (
    <AboutStyles>
      <HeroBanner heroBannerImage={productsBanner} heroBannerHeading="About Us" />
      <SkinnyBanner bannerHeading="Established 2023" />
      <img className="logo-image" src={logoImage} />

      <p className="left-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed leo finibus, vestibulum
        diam vel, dictum turpis. Fusce pulvinar tempus enim quis accumsan. Quisque porta elit eget
        leo pulvinar tincidunt. In risus tortor, blandit id tristique at, tristique a leo.
        Pellentesque dictum lacinia magna quis suscipit. Pellentesque lectus justo, malesuada sed
        volutpat sit amet, aliquam ut turpis. Mauris convallis condimentum urna, quis vehicula
        mauris cursus sit amet. Morbi vel venenatis lorem. Sed eget varius orci, in congue mi. Proin
        molestie lectus et laoreet lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed leo finibus, vestibulum
        diam vel, dictum turpis. Fusce pulvinar tempus enim quis accumsan. Quisque porta elit eget
        leo pulvinar tincidunt. In risus tortor, blandit id tristique at, tristique a leo.
        Pellentesque dictum lacinia magna quis suscipit. Pellentesque lectus justo, malesuada sed
        volutpat sit amet, aliquam ut turpis. Mauris convallis condimentum urna, quis vehicula
        mauris cursus sit amet. Morbi vel venenatis lorem. Sed eget varius orci, in congue mi. Proin
        molestie lectus et laoreet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam sed leo finibus, vestibulum diam vel, dictum turpis. Fusce pulvinar tempus enim quis
        accumsan. Quisque porta elit eget leo pulvinar tincidunt. In risus tortor, blandit id
        tristique at, tristique a leo. Pellentesque dictum lacinia magna quis suscipit. Pellentesque
        lectus justo, malesuada sed volutpat sit amet, aliquam ut turpis. Mauris convallis
        condimentum urna, quis vehicula mauris cursus sit amet. Morbi vel venenatis lorem. Sed eget
        varius orci, in congue mi. Proin molestie lectus et laoreet lacinia.
      </p>
    </AboutStyles>
  );
};

export default About;



