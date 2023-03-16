import styled from "styled-components";

export const AboutStyles = styled.div`
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
  .logo-image {
    height: 200px;
    width: 15%;
    border-radius: 10px;
    display: block;
    margin: auto;
  }
  p {
    margin: 2rem;
  }
  @media (max-width: 1025px) {
    .heroBanner {
      height: 200px;
    }
    .heroBanner img {
      height: 200px;
    }
    h1 {
      font-size: 70px;
      margin: -19% auto 0 auto;
    }
    .logo-image {
      height: 150px;
      width: 20%;
    }
  }
  @media (max-width: 767px) {
    .heroBanner {
      height: 150px;
    }
    .heroBanner img {
      height: 150px;
    }
    h1 {
      font-size: 50px;
      margin: -30% auto 0 auto;
    }
    .logo-image {
      height: 150px;
      width: 45%;
    }
  }
`;
