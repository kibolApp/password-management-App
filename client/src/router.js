import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Main from "./pages/Main";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Auth",
        element: <Auth />,
    },
    {
        path: "/Main",
        element: <Main />,
    },
]);

export default router;