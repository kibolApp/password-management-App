import React from "react";
import {Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import RandomPassword from "./components/RandomPassword";
import DefaultLayout from "./components/Context/DefaultLayout";
import GuestLayout from "./components/Context/GuestLayout";

const router = createBrowserRouter([


    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/Main' />,
              },
            {
                path: "/Main",
        element: <Main />,
            },
             {
                 path: "/RPG",
                element: <RandomPassword />,
             },
    
    ]},
    {path: '/',
    element: <GuestLayout />,
    children: [
        {
            path: '/',
            element: <Navigate to='/home' />,
          },
      {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/Auth",
        element: <Auth />,
    },
    ]}
]);

export default router;