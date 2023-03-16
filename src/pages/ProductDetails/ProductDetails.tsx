import React from "react";
import itemCardsData from "../../components/ItemCards/ItemCardsData.json";
import { useLocation } from "react-router-dom";
import BionicReading from "../../components/BionicReading/BionicReading";
import ProductDetailsStyles from "./ProductDetailsStyles";

const ProductDetails = () => {
  const { pathname } = useLocation();
  const itemNumber = Number(pathname.split("/").reverse()[0]) - 1;
  return (
    <ProductDetailsStyles>
      <div className="product-container">
        <div className="product-img">
          <img
            src={itemCardsData.itemCards[itemNumber].singleViewImage}
            alt={itemCardsData.itemCards[itemNumber].singleImageAlt}
          />
        </div>
        <div className="product-title">
          <BionicReading
            text={itemCardsData.itemCards[itemNumber].itemTitle}
            as={"p"}
          />
        </div>
        <div className="product-description">
          <BionicReading
            text={itemCardsData.itemCards[itemNumber].itemDescription}
            as={"p"}
          />

          <ul>
            <BionicReading
              text={itemCardsData.itemCards[itemNumber].itemPrice}
              as={"li"}
            />
            <BionicReading
              text={itemCardsData.itemCards[itemNumber].itemStorage}
              as={"li"}
            />
            <BionicReading
              text={itemCardsData.itemCards[itemNumber].itemData}
              as={"li"}
            />
          </ul>
        </div>
      </div>
      <div className="banner-image">
        <img
          src={itemCardsData.itemCards[itemNumber].itemBanner}
          alt={itemCardsData.itemCards[itemNumber].itemBannerAlt}
        />
      </div>
      <div className="tech-specs">
        <img
          src={itemCardsData.itemCards[itemNumber].itemTechSpecs}
          alt={itemCardsData.itemCards[itemNumber].itemTechAlt}
        />
      </div>
    </ProductDetailsStyles>
  );
};
export default ProductDetails;
