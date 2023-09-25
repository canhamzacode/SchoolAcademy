import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import loading from "../components/Loading/loading";
// import RoadMap from "./pages/roadMap";

// const Home = lazy(() => import("./pages/home"));

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<loading />}>
                "Home"
            </React.Suspense>
        ),
        errorElement: <div>Error 404</div>,
    },
    {
        path: "/onboarding",
        element: (
            <React.Suspense fallback={<loading />}>
                "OnBoarding"
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;