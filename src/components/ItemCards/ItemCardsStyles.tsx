import styled from "styled-components";

const ItemCardsStyles = styled.div`
  & .item-card-container {
    display: grid;
    padding-left: 4%;
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 1025px) {
    & .item-card-container {
      transform: translateY(-8%);
      padding-left: 3%;
      grid-template-columns: auto auto;
      grid-template-rows: 400px 300px;
    }
  }
  @media (max-width: 767px) {
    & .item-card-container {
      grid-template-columns: auto auto;
    }
  }
`;
export default ItemCardsStyles;
