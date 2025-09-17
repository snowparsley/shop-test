import { useLocation } from "react-router-dom";
import { Wrappers } from "../components/styled-components";

const Product = () => {
  const location = useLocation();
  const item = location.state?.item;

  return (
    <Wrappers>
      <img src={item.image_url}></img>
      <h2>{item.product_name}</h2>
      <p>가격: {item.product_price?.toLocaleString()}원</p>
      <p>할인가: {item.product_sale_price?.toLocaleString()}원</p>
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.product_name}
          style={{ width: "400px", marginTop: "10px" }}
        />
      )}
    </Wrappers>
  );
};

export default Product;
