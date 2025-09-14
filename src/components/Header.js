import styled from "styled-components";
import { Logo } from "./styled-components";

const HeaderContainer = styled.header`
  background: white;
  position: sticky; /* 스크롤 시 상단에 붙음 */
  top: 0;
  width: 100%; /* 화면 폭에 맞게 늘어나도록 */
  max-width: 730px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  z-index: 1000;

  i {
    padding: 0 10px;
    font-size: 20px; /* 아이콘 크기 고정 */
    cursor: pointer;
  }

  img {
    width: 120px; /* 로고 크기 고정 */
    height: auto;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src="bscompany.png"
        alt="logo"
        style={{
          width: "140px",
        }}
      />

      <i className="fa-solid fa-magnifying-glass"></i>
    </HeaderContainer>
  );
};

export default Header;
