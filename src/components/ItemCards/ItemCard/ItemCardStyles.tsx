import styled from "styled-components";

const ItemCardStyles = styled.div`
  background-color: #adc2e6;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 300px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 9px 13px 26px -7px rgba(0, 0, 0, 0.65);

  img {
    margin: 12.5px 12.5px 0 12.5px;
    height: 200px;
    width: 275px;
    border-radius: 10px;
    object-fit: cover;
  }
  & a {
    color: white;
    text-decoration: none;
    padding-left: 1rem;
    font-size: 22px;
    margin-top: -10px;
  }
  & h3 {
    color: white;
    font-size: 25px;
    padding-left: 1rem;
  }
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 767px) {
    padding-right: 15px;
    padding-bottom: 3rem;
    & .title-container {
      height: 50px;
      margin-top: -15px;
      width: 100%;
      background-color: #545454;
    }
    & img {
      width: 150px;
      height: 80%;
    }
    & a {
      text-decoration: none;
    }
    & h1 {
      transform: translateY(90%);
      color: white;
      text-align: center;
      font-size: 16px;
    }
  }
`;
export default ItemCardStyles;
