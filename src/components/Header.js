import styled from "styled-components";
import { Logo } from "./styled-components";

const HeaderContainer = styled.header`
  background: beige;
  position: sticky; /* 스크롤 시 상단에 “붙음” */
  top: 0; /* 상단 기준 위치 */
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  z-index: 1000;

  i {
    margin: 0 10px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="bscompany.png" alt="logo" />
      <i className="fa-solid fa-magnifying-glass"></i>
    </HeaderContainer>
  );
};

export default Header;
