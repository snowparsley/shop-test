import { useNavigate } from "react-router-dom";
import { Col, Wrappers } from "../components/styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navigate = useNavigate();

  const shirtImages = [
    {
      id: 1,
      product_name: "폴로 남녀공용 옥스퍼드 셔츠",
      product_price: 99000,
      image_url: "item1.jpg",
    },
    {
      id: 2,
      product_name: "스투시 다이스 기모 맨투맨 (3color)",
      product_price: 129000,
      image_url: "item2.jpg",
    },
    {
      id: 3,
      product_name: "[수플샵] 닥터라인 헤모키즈&징크키즈",
      product_price: 21000,
      image_url: "item3.jpg",
    },
    {
      id: 4,
      product_name: "나의 이노시톨 마이시톨",
      product_price: 17900,
      image_url: "item4.jpg",
    },
    {
      id: 5,
      product_name: "타미힐피거 니트 가디건",
      product_price: 72000,
      image_url: "item5.jpg",
    },
  ];

  const hoodImages = [
    {
      id: 6,
      product_name: "스투시 베이직 기모 후드티 (1color)",
      product_price: 119000,
      image_url: "top1.jpg",
    },
    {
      id: 7,
      product_name: "스투시 다이스 기모 맨투맨 (3color)",
      product_price: 129000,
      image_url: "top2.jpg",
    },
    {
      id: 8,
      product_name: "여자 오버핏 싱글 베이직 봄자켓 (3col)",
      product_price: 64020,
      image_url: "top3.jpg",
    },
    {
      id: 9,
      product_name: "타미힐피거 니트 가디건",
      product_price: 72000,
      image_url: "top4.jpg",
    },
    {
      id: 10,
      product_name: "랄프로렌 릴렉스핏 린넨셔츠",
      product_price: 89000,
      image_url: "top5.jpg",
    },
  ];

  const bagImages = [
    {
      id: 11,
      product_price: 5000,
      image_url: "acc1.jpg",
    },
    {
      id: 12,
      product_name: "14k my love necklace & earring",
      product_price: 272000,
      image_url: "acc2.jpg",
    },
    {
      id: 13,
      product_name: "14k my dear pearl necklace",
      product_price: 328000,
      image_url: "acc3.jpg",
    },
  ];

  const sliderSettings = {
    dots: false, // 하단 점 생성
    infinite: true, // 마지막에서 다시 처음으로
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true, // 드래그로 넘기기
    autoplay: false, // 자동재생
  };

  const renderSlider = (items) => {
    return (
      <Slider
        {...sliderSettings}
        style={{ width: "700px", margin: "0 auto 15px" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              cursor: "pointer",
            }}
            onClick={() => navigate(`/product/${item.id}`, { state: { item } })}
          >
            <img
              src={item.image_url}
              alt={item.product_name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                border: "1px solid gray",
              }}
            />
            <p style={{ margin: "10px 0 0 0", fontWeight: "bold" }}>
              {item.product_name}
            </p>
            <p
              style={{
                margin: "2px auto",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {item.product_price.toLocaleString()}원
            </p>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <Wrappers>
      <Col style={{ alignItems: "center" }}>
        {/* 메인 이미지 */}
        <img
          src="bscompany2.jpg"
          alt="bscompany"
          style={{
            width: "700px",
            height: "400px",
            display: "block",
            margin: "0 auto 15px",
          }}
        />

        <div style={{ width: "700px", margin: "0", textAlign: "left" }}>
          <h2>인기있는 상품 🔥</h2>
        </div>
        {renderSlider(shirtImages)}

        <div style={{ width: "700px", margin: "0", textAlign: "left" }}>
          <h2># Top</h2>
        </div>
        {renderSlider(hoodImages)}

        <div style={{ width: "700px", margin: "0", textAlign: "left" }}>
          <h2># Acc</h2>
        </div>
        {renderSlider(bagImages)}
      </Col>
    </Wrappers>
  );
};

export default Home;
