import styled from "styled-components";

const SkinnyBannerStyles = styled.div`
  background-color: #3a485f;
  text-align: center;
  height: 100px;
  color: white;
  transform: translateY(-50px);

  p {
    padding-top: 20px;
    font-size: 50px;
  }
  @media(max-width: 767px) {
    height: 60px;
    p{ 
      transform: translateY(-5px);
      font-size: 27px;
    }
  }
`;
export default SkinnyBannerStyles;
