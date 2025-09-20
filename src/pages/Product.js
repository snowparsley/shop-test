import { useLocation } from "react-router-dom";
import { Wrappers } from "../components/styled-components";

const Product = () => {
  const location = useLocation();
  const item = location.state?.item;
  return (
    <Wrappers>
      <img
        src={item?.image_url}
        alt={item?.product_name}
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "300px",
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
        }}
      />

      <h2
        style={{
          marginLeft: "150px",
        }}
      >
        {item.product_name}
      </h2>
      <p
        style={{
          marginLeft: "150px",
        }}
      >
        가격: {item.product_price?.toLocaleString()}원
      </p>
      <p
        style={{
          marginLeft: "150px",
        }}
      >
        할인가: {item.product_sale_price?.toLocaleString()}원
      </p>
    </Wrappers>
  );
};

export default Product;
