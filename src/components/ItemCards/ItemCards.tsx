import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import itemCardsData from "./ItemCardsData.json";
import ItemCardsStyles from "./ItemCardsStyles";

interface ItemCardsProps {
  itemCardDataStart?: number;
  itemCardDataEnd?: number;
    itemCardClass?:string
}

const ItemCards = ({ itemCardDataStart, itemCardDataEnd,itemCardClass }: ItemCardsProps) => {
  return (
    <ItemCardsStyles>
      <div className={itemCardClass}>
        {itemCardsData.itemCards.slice(itemCardDataStart, itemCardDataEnd).map((card) => (
          <ItemCard key={1} {...card} itemLink={`/products/${card.id}`} />
        ))}
      </div>
    </ItemCardsStyles>
  );
};
export default ItemCards;
