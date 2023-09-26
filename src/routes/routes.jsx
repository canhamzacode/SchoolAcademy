import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loading/Loader";

const LandingPage = lazy(()=> import("../pages/LandingPage/LandingPage"))
const Login = lazy(()=> import("../pages/Login/Login"))


const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<Loader />}>
                <LandingPage/>
            </React.Suspense>
        ),
        errorElement: <div>Error 404</div>,
    },
    {
        path: "/onboarding",
        element: (
            <React.Suspense fallback={<Loader />}>
                "OnBoarding"
            </React.Suspense>
        ),
    },
    {
        path: "/login",
        element: (
            <React.Suspense fallback={<Loader />}>
                <Login/>
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;