import { useEffect, useState } from "react";
import { Col, Row, RowWrap, Wrappers } from "../components/styled-components";
import axios from "axios";

const Home = () => {
  const default_list = [
    <img src="bscompany2.png"></img>,
    5,
    6,
    7,
    8,
    9,
    10,
    11, //창 크기에 따라 ul가 변경되게
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
        <Col style={{}}>
          {list.map((el, idx) => {
            return (
              <div
                style={{
                  width: "50%",
                  margin: "0 auto",
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
