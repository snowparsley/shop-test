
import Home from "../pages/Home";
import Product from "../pages/Product";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/product/:id', element: <Product /> },
]
export default routes;