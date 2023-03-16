import styled from "styled-components";

export const DiscoverBannerStyles = styled.div`
  padding: 1rem;
  margin: auto;
  height: 400px;
  width: 80vw;
  color: #3c4662;
  margin-bottom: 2rem;
  h1 {
    font-size: 40px;
    text-align: center;
    transform: translateY(-350px);
    text-shadow: 1px 1px 2px #fff;
  }
  p {
    margin: 5rem;
    font-size: 25px;
    text-align: center;
    transform: translateY(-400px);
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  .logo {
    height: 100px;
    width: 100px;
    transform: translateY(-350px);
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 767px) {
    padding: 1rem;
    height: 300px;
    h1 {
      transform: translateY(-270px);
    }
    p {
      margin: 2rem;
      text-align: center;
      transform: translateY(-250px);
    }
  }
`;
