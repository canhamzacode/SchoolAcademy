import {  Route, RouterProvider, Routes } from "react-router-dom"
import BrowserRouter from "./routes/routes"

function App() {

  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default App
