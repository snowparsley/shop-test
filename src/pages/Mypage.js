import { Wrappers } from "../components/styled-components";

const Mypage = () => {
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
        <h2>마이페이지</h2>
      </div>
    </Wrappers>
  );
};

export default Mypage;
