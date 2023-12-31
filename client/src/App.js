import React, { Children } from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Register from "./components/Register";
import RestaurantMenu from "./components/Restaurantmenu";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Cart from "./components/Cart";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app">

            <Header />
            <Outlet />

        </div>
        </Provider>
    )
}

// 
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/restaurants/:resID",
                element: <RestaurantMenu />,
            },
            {
                path :"/Cart",
                element: <Cart/>
            },
            {
                path: "/Register",
                element: <Register />,
            },
            {
                path: "/Login",
                element: <Login />,
            },

        ],
        errorElement: <Error />,
    },
    ,
]);



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)