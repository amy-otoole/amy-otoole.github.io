import styled from "styled-components";

const ProductDetailsStyles = styled.div`
  .product-container {
    display: grid;
    width: 60%;
    height: 500px;
    padding-top: 3rem;
    margin: auto;
  }
  .product-img {
    margin-left: -30%;
    grid-column: 1;
    grid-row: 1;

    border-radius: 10px;
    object-fit: contain;
  }
  .product-img img {
    width: 80%;
    height: 70%;
    margin-top: 1rem;
  }

  .product-title {
    margin-top: 1rem;
    font-size: 35px;
    grid-column: 2;
    grid-row: 1;
    color: #313941;
  }
  .product-description {
    font-size: 25px;
    padding-top: 100px;
    grid-column: 2;
    grid-row: 1;
    color: #313941;
  }
  ul {
    margin-bottom: 2rem;
  }
  .banner-image img {
    width: 100%;
  }
  .tech-specs img {
    display: block;
    margin: 2rem auto 2rem auto;
    width: 650px;
    height: 600px;
    object-fit: contain;
  }
`;
export default ProductDetailsStyles;
