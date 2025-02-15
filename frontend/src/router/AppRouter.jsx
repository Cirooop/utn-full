// AppRouter.jsx -> archivo encargado de manejar las rutas
// por ejemplo: /home - /dashboard

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { Error } from "../pages/Error"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRouter }