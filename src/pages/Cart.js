import { Wrappers } from "../components/styled-components";

const Cart = () => {
  return (
    <Wrappers>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          margin: "0 100px",
        }}
      >
        <h2>장바구니 페이지</h2>
      </div>
    </Wrappers>
  );
};

export default Cart;
