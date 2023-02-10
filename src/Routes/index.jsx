import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PageSpeed from "../pages/PageSpeed";

export const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="page-speed" element={<PageSpeed />} />
    </Routes>
  )
}