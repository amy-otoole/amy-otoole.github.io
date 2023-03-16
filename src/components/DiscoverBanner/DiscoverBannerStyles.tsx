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
  
    @media (max-width: 1025px) {
   
    width: 90vw;
    padding: 1rem;
    height: 300px;
    h1 {
    font-size: 27px;
      transform: translateY(-290px);
    }
    p {
      margin: 2rem;
   font-size: 22px;
      transform: translateY(-300px);
    } 
    .logo {
    height: 70px;
    width: 70px;
    transform: translateY(-290px);

  }
  }
  @media (max-width: 767px) {
   
    width: 90vw;
    padding: 1rem;
    height: 300px;
    h1 {
    font-size: 25px;
      transform: translateY(-290px);
    }
    p {
      margin: 2rem;
   font-size: 17px;
      transform: translateY(-300px);
    } 
    .logo {
    height: 70px;
    width: 70px;
    transform: translateY(-290px);

  }
  }
 
`;
