import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BottomMenuContainer = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 700px; /* 고정 폭 */
  max-width: 100%; /* 화면이 1200px보다 작으면 화면 폭에 맞춤 */
  display: flex;
  justify-content: center; /* 아이콘 사이 간격 */
  align-items: center;
  z-index: 1000;
  height: 50px;

  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.1), -3px 0 6px rgba(0, 0, 0, 0.1),
    3px 0 6px rgba(0, 0, 0, 0.1);

  i {
    font-size: 17px;
    margin: 30px;
    cursor: pointer;
  }
`;

const BottomMenu = () => {
  const navigate = useNavigate();

  const gohome = () => {
    navigate("/");
    window.scrollTo({ top: 0 });
  };

  return (
    <BottomMenuContainer>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "40px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <i className="fa-solid fa-basket-shopping" onClick={gohome}></i>
        </li>
        <li>
          <i
            className="fa-solid fa-cart-shopping"
            onClick={() => navigate("/cart")}
          ></i>
        </li>
        <li>
          <i
            className="fa-regular fa-user"
            onClick={() => navigate("/mypage")}
          ></i>
        </li>
      </ul>
    </BottomMenuContainer>
  );
};

export default BottomMenu;
