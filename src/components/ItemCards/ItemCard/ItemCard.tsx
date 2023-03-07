import React from "react";
import ItemCardStyles from "./ItemCardStyles";
import { Link } from "react-router-dom";

interface ItemCardProps {
  itemImage?: string;
  itemTitle?: string;
  itemParagraph?: string;
  itemLink: string;
}

const ItemCard = ({ itemImage, itemTitle, itemParagraph, itemLink }: ItemCardProps) => {
  return (
    <ItemCardStyles>
      <img src={itemImage} />
      <div className="title-container">
        <h3>{itemTitle}</h3>
        <p>{itemParagraph}</p>
        <Link to={itemLink}>View Product &gt;</Link>
      </div>
    </ItemCardStyles>
  );
};
export default ItemCard;
