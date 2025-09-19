import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeaderContainer = styled.header`
  background: white;
  position: sticky; //스크롤시 상단 고정
  top: 0;
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  z-index: 1000; //제일 위로

  i {
    padding: 0 10px;
    font-size: 20px;
    cursor: pointer;
  }

  img {
    width: 140px;
    height: auto;
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  position: absolute; // 헤더 아래 겹치기
  top: 65px;
  left: 50%;
  transform: translateX(-50%); //가운데
  width: 100%;
  max-width: 694px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  input {
    width: 98%;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 12px;
    font-size: 15px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const gohome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeaderContainer>
        <img src="bscompany.jpg" alt="logo" onClick={gohome} />
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => setShowSearch(!showSearch)}
        ></i>
      </HeaderContainer>

      {showSearch && (
        <SearchBox>
          <input type="text" placeholder=" 상품명을 입력하세요" />
        </SearchBox>
      )}
    </>
  );
};

export default Header;
