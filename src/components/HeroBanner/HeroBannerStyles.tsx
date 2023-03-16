import styled from "styled-components";

const HeroBannerStyles = styled.div`
  width: 100%;
  height: 500px;
  box-shadow: 1px 1px 3px #373535;
  & h1 {
    width: 40%;
    color: #3c4662;
    font-size: 70px;
    margin-top: -430px;
    margin-left: 50%;
    text-align: center;
    text-shadow: 1px 1px 2px #fff;
  }
  & p {
    width: 35%;
    color: #3c4662;
    font-size: 20px;
    margin-left: 53%;
    text-align: center;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1025px) {
    width: 100%;
    height: 320px;
    box-shadow: 1px 1px 3px #373535;
    & h1 {
      width: 60%;
      font-size: 50px;
      margin-top: -320px;
      margin-left: 40%;
      text-shadow: 1px 1px 2px #fff;
    }
    & p {
      width: 50%;
      margin-left: 45%;
      margin-top: -20px;
    }
    & img {
      height: 350px;
    }
  }
  @media (max-width: 767px) {
    height: 200px;
    width: 100%;
    & h1 {
      width: 65%;
      margin-left: 32%;
      font-size: 25px;
      margin-top: -180px;
      text-shadow: 1px 1px 2px #fff;
    }
    & p {
      width: 60%;
      font-size: 12px;
      margin-left: 35%;
      margin-top: -10px;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default HeroBannerStyles;
