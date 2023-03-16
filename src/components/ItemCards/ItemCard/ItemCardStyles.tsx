import styled from "styled-components";

const ItemCardStyles = styled.div`
  background-color: #4c5d7b;
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
    padding-left: 0.5rem;
    font-size: 22px;
    margin-top: -10px;
  }
  & p {
    color: white;
    font-size: 25px;
    padding-left: 1rem;
  }
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 1025px) {
    width: 350px;
    height: 380px;
    img {
      margin: 10px 10px 0 10px;
      height: 220px;
      width: 330px;
    }
    & a {
      font-size: 25px;
      margin-top: -90px;
    }
    & p {
      font-size: 30px;
    }
  }
  @media (max-width: 767px) {
    width: 170px;
    height: 230px;
    border-radius: 10px;
    box-shadow: 9px 13px 26px -7px rgba(0, 0, 0, 0.65);

    margin-bottom: 1rem;
    img {
      margin: 10px 10px 0 10px;
      height: 120px;
      width: 150px;
    }
    & a {
      font-size: 15px;
      margin-top: -70px;
    }
    & p {
      color: white;
      font-size: 18px;
    }
  }
`;
export default ItemCardStyles;
