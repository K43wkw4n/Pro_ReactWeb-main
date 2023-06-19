import PrivateMain from "../private-pages/main/PrivateMain";
import CreateProduct from "../private-pages/main/CreateProduct";
import AllProducts from "../private-pages/main/AllProducts";
import EditPage from "../private-pages/main/EditPage";
import OrderPage from "../private-pages/main/OrderPage";
import EditOrder from "../private-pages/main/EditOrder";

export const PrivateRoute = [
    {
        id: "0",
        path: "/",
        element: <PrivateMain />
    },
    {
        id: "1",
        path: "/All-Products",
        element: <AllProducts />
    },
    {
        id: "2",
        path: "/CreateProduct",
        element: <CreateProduct />
    },
    {
        id: "3",
        path: "/EditPage",
        element: <EditPage />
    },
    {
        id: "4",
        path: "/OrderPage",
        element: <OrderPage />
    },
    {
        id: "5",
        path: "/EditOder",
        element: <EditOrder />
    },

];