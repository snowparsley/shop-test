import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomMenu from "../components/BottomMenu";
import { Col } from "../components/styled-components";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Mypage from "../pages/Mypage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/product/:id", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/mypage", element: <Mypage /> },
];

const ShopLayout = () => {
  return (
    <Col
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          {routes.map((el, idx) => (
            <Route key={idx} path={el.path} element={el.element} />
          ))}
        </Routes>
      </div>
      <Footer />
      <BottomMenu />
    </Col>
  );
};

export default ShopLayout;
