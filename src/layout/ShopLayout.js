import { Route, Routes } from "react-router-dom"
import routes from "../routes/route"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BottomMenu from "../components/BottomMenu"
import { Col } from "../components/styled-components"
const ShopLayout = () => {

    return (
        <>
            <Col>
                <Header />
                <Routes>
                    {routes.map(el => {
                        return <Route exact path={el.path} element={el.element} />
                    })}
                </Routes>
                <BottomMenu />
                <Footer />
            </Col>

        </>
    )

}
export default ShopLayout;