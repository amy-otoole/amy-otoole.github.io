import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: transparent;
  color: #566371;
  width: 180px;
  height: 58px;
  margin-top: 2rem;
  margin-left: 63%;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #566371;
  font-size: 24px;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1025px) {
    width: 170px;
    height: 50px;
    margin: 0px 0 0 59%;
  }
  @media (max-width: 767px) {
    width: 100px;
    height: 30px;
    margin: -10px 0 0 51%;
    border-radius: 45px;
    font-size: 14px;

    &:hover {
      cursor: pointer;
      transform: translateY(0px);
      box-shadow: 0px 5px 8px #000;
    }
  }
`;
export default ButtonStyles;
