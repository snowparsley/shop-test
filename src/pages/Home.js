import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Wrappers } from "../components/styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Home = () => {
  const [shirtImages, setShirtImages] = useState([]);
  const [hoodImages, setHoodImages] = useState([]);
  const [bagImages, setBagImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHomeContent();
  }, []);

  const getHomeContent = async () => {
    try {
      const { data } = await axios.get("/api/shop/?brand_id=12&root_id=1");
      // products 배열 확인 → 실제 API 키에 맞춰 image_url로 매핑
      const shirts = data.products
        .filter((p) => p.category === "셔츠")
        .map((p) => ({ ...p, image_url: p.image })); // ← API 실제 이미지 키 사용
      const hoods = data.products
        .filter((p) => p.category === "후드")
        .map((p) => ({ ...p, image_url: p.image }));
      const bags = data.products
        .filter((p) => p.category === "백")
        .map((p) => ({ ...p, image_url: p.image }));

      setShirtImages(shirts);
      setHoodImages(hoods);
      setBagImages(bags);
    } catch (err) {
      console.log(err);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    swipe: true,
    autoplay: false,
  };

  const loadingBoxStyle = {
    width: "680px",
    height: "300px",
    margin: "0 auto 15px",
    background: "beige",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "20px",
    fontSize: "18px",
    color: "#555",
  };

  const renderSlider = (items, loadingText) => {
    return items.length > 0 ? (
      <Slider
        {...sliderSettings}
        style={{ width: "700px", margin: "0 auto 15px" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/product/${item.id}`, { state: { item } })}
          >
            <img
              src={item.image_url}
              alt={item.product_name}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {item.product_name}
            </p>
          </div>
        ))}
      </Slider>
    ) : (
      <div style={loadingBoxStyle}>{loadingText}</div>
    );
  };

  return (
    <Wrappers>
      <Col style={{ alignItems: "center" }}>
        <img
          src="bscompany2.png"
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
        {renderSlider(shirtImages, "셔츠 슬라이더 로딩 중...")}

        <div style={{ width: "700px", margin: "0", textAlign: "left" }}>
          <h2># Top</h2>
        </div>
        {renderSlider(hoodImages, "후드 슬라이더 로딩 중...")}

        <div style={{ width: "700px", margin: "0", textAlign: "left" }}>
          <h2># Acc</h2>
        </div>
        {renderSlider(bagImages, "백 슬라이더 로딩 중...")}
      </Col>
    </Wrappers>
  );
};

export default Home;
