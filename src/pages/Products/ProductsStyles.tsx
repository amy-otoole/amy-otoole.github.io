import styled from "styled-components";

export const ProductsStyles = styled.div`
  .heroBanner {
    height: 300px;
  }
  box-shadow: 0px 0px 0px #fff;
  button {
    border-color: transparent;
  }
  h1 {
    font-size: 95px;
    margin: -15% auto 0 auto;
  }
  & .item-card-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }

  @media (max-width: 1025px) {
    .heroBanner {
      height: 200px;
      width: 100%;
      margin-bottom: 8rem;
    }
    .heroBanner h1 {
      margin-top: -230px;
    }
    & .item-card-container {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: 430px 430px 430px 430px 430px 430px;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
  }
  @media (max-width: 767px) {
    .heroBanner {
      height: 150px;
      width: 100%;
      margin-bottom: 8rem;
    }
    .heroBanner h1 {
      margin-top: -100px;
      font-size: 45px;
    }
    & .item-card-container {
      transform: translateY(-12%);
      grid-template-columns: auto auto;
      grid-template-rows: 250px 250px 250px 250px 250px 250px;
      margin-bottom: -7rem;
    }
  }
`;
