import styled from "styled-components";

const HomeStyles =styled.div`
  & .item-card-container {
    display: grid;
    transform: translateY(-9%);
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 250px 250px;
    margin-bottom: -5rem;
  }
  @media(max-width: 1025px){
    & .item-card-container {
      display: grid;
      transform: translateY(-9%);
      grid-template-columns: auto auto;
      grid-template-rows: 430px 400px;
      margin: 2rem 0;
    }
  }
  @media(max-width: 767px){
    & .item-card-container {
      display: grid;
      transform: translateY(-9%);
      grid-template-columns: auto auto;
      grid-template-rows: 250px 250px;
      margin-bottom: 4rem;
    }
  }
     
    `;
export default HomeStyles;