import Home from "../screen/Home"
import Login from "../screen/Login"
import ProductDetail from "../screen/ProductDetail"
import Register from "../screen/Register"
import Cart from "../screen/Cart"
import Product from "../component/Product"
import Books from "../screen/Books"
import Checkout from "../screen/Checkout"

 export const PublicRoute = [
    {
        id: "0",
        path: "/",
        element: <Home/>
    },
    {
        id: "1",
        path: "/ProductDetail",
        element: <ProductDetail/>
    },
    {
        id: "2",
        path: "/Cart",
        element: <Cart/>
    },
    {
        id: "3",
        path: "/Product",
        element: <Product/>
    },
    {
        id: "4",
        path: "/Login",
        element: <Login/>
    },
    {
        id: "5",
        path: "/Register",
        element: <Register/>
    },
    {
        id: "6",
        path: "/Books",
        element: <Books/>
    },
    {
        id: "7",
        path: "/Checkout",
        element: <Checkout/>
    },
 ];