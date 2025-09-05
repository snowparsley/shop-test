import styled from "styled-components";
import { Logo } from "./styled-components";

const HeaderContainer = styled.header`
  background: white;
  position: sticky; /* 스크롤 시 상단에 붙음 */
  top: 0;
  width: 600px; /* 고정 폭 */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  z-index: 1000;

  i {
    margin: 0 10px;
    font-size: 20px; /* 아이콘 크기 고정 */
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
