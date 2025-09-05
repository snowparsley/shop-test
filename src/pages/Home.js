import { useEffect, useState } from "react";
import { Col, Row, RowWrap, Wrappers } from "../components/styled-components";
import axios from "axios";
import styled from "styled-components";

const Home = () => {
  const default_list = [
    <img
      src="bscompany2.png"
      alt="bscompany"
      style={{
        width: "600px",
        height: "400px",
        display: "block",
        margin: "0 auto",
      }}
    />,
    <h2
      style={{
        marginLeft: "-215px",
      }}
    >
      인기있는 상품 🔥
    </h2>,
    "셔츠",
    <h2
      style={{
        marginLeft: "-270px",
      }}
    >
      # Top
    </h2>,
    "후드",
    <h2
      style={{
        marginLeft: "-270px",
      }}
    >
      # Acc
    </h2>,
    "백",
  ];
  const [list, setList] = useState(default_list);
  const [homeContent, setHomeContent] = useState({});
  useEffect(() => {
    getHomeContent();
  }, []);
  const getHomeContent = async () => {
    try {
      let domain = await axios.get(`/api/domain/?dns=bs-company.co.kr`);
      console.log(domain);
      let { data: response } = await axios.get(
        `/api/shop/?is_manager=0&brand_id=12&root_id=1`
      );
      console.log(response);
      setHomeContent(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Wrappers>
        <Col>
          {list.map((el, idx) => {
            return (
              <div
                style={{
                  width: "100%",
                  margin: "0",
                  paddingTop: "0 0 10px",
                  textAlign: "center",
                }}
              >
                {el}
              </div>
            );
          })}
        </Col>
      </Wrappers>
    </>
  );
};
export default Home;
