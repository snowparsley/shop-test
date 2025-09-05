import styled from "styled-components";

const BottomMenuContainer = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
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
  }
`;

const BottomMenu = () => {
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
          <i class="fa-solid fa-basket-shopping"></i>
        </li>
        <li>
          <i class="fa-solid fa-cart-shopping"></i>
        </li>
        <li>
          <i class="fa-regular fa-user"></i>
        </li>
      </ul>
    </BottomMenuContainer>
  );
};

export default BottomMenu;
