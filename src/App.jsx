import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Loader from "./components/Loading/Loader"
import LandingPage from "./pages/LandingPage/LandingPage"
import { Suspense } from "react"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import AuthLayout from "./layout/AuthLayout"
import AdminLayout from "./layout/AdminLayout"
import Admin from "./pages/Admin/Admin"
// import BrowserRouter from "./routes/routes"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthLayout/>}>
        <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <LandingPage />
                </Suspense>
              }
        />
        <Route
              path="/login"
              element={
                <Suspense fallback={<Loader />}>
                  <Login />
                </Suspense>
              }
        />
        <Route
              path="/signup"
              element={
                <Suspense fallback={<Loader />}>
                  <SignUp />
                </Suspense>
              }
        />
      </Route>
      <Route path="/" element={<AdminLayout/>}>
      <Route
              path="/admin"
              element={
                <Suspense fallback={<Loader />}>
                  <Admin />
                </Suspense>
              }
        />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
