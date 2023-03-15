import React from "react";
import ItemCardStyles from "./ItemCardStyles";
import { Link } from "react-router-dom";
import BionicReading from "../../BionicReading/BionicReading";

interface ItemCardProps {
  itemImage?: string;
  itemTitle?: string;
  itemParagraph?: string;
  itemLink: string;
  itemImageAlt: string;
}

const ItemCard = ({
  itemImage,
  itemTitle,
  itemParagraph,
  itemLink,
  itemImageAlt,
}: ItemCardProps) => {
  return (
    <ItemCardStyles>
      <img src={itemImage} alt={itemImageAlt} />
      <div className="title-container">
        <BionicReading text={itemTitle} as={"p"} />
        <Link to={itemLink}>
          <BionicReading text={"View Product >"} as={"a"} />
        </Link>
      </div>
    </ItemCardStyles>
  );
};
export default ItemCard;
