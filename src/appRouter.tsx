import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Detail from "./Detail";
import Login from "./Login";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Settings from "./Settings";

export const routes = (
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="/detail/:pid/:cid" element={<Detail />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
