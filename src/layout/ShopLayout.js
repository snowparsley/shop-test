import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BottomMenu from "../components/BottomMenu"
import { Col } from "../components/styled-components"
import Home from "../pages/Home"
import Product from "../pages/Product"
const routes = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/product/:id', element: <Product /> },
]
const ShopLayout = () => {

    return (
        <>
            <Col>
                <Header />
                <Routes>
                    {routes.map(el => <>
                        <Route exact path={el.path} element={el.element} />
                    </>)}
                </Routes>
                <BottomMenu />
                <Footer />
            </Col>
        </>
    )

}
export default ShopLayout;