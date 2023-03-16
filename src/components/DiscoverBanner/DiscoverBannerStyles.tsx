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
    transform: translateY(-370px);
    text-shadow: 1px 1px 2px #fff;
  }
  p {
    margin: 5rem;
    font-size: 25px;
    text-align: center;
    transform: translateY(-370px);
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  @media (max-width: 767px){
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
