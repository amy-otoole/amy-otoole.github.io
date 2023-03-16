import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import ItemCards from "../../components/ItemCards/ItemCards";
import productsBanner from "../../../public/assets/images/backgrounds/products-hero.png";
import { ProductsStyles } from "./ProductsStyles";

const Home = () => {
  return (
    <ProductsStyles>
      <HeroBanner
        heroBannerClass="heroBanner"
        heroBannerImage={productsBanner}
        heroBannerHeading="Products"
      />
      <ItemCards itemCardClass="item-card-container" />
    </ProductsStyles>
  );
};
export default Home;
