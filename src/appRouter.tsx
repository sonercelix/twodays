import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Navbar from "./Navbar";
import Settings from "./Settings";

export const routes = (
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="" element={<Login />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="settings" element={<Settings />}></Route>
    </Routes>
  </BrowserRouter>
);
