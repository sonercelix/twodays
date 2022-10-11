import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Dashboard() {
  const location = useLocation();
  const data = location.state;
  if (data) {
    console.log(data);
    const { name, year, status } = data;
    console.log(name, year, status);
  }

  const urls = [
    { id: 100, title: "Iphone" },
    { id: 110, title: "Samsung" },
    { id: 120, title: "LG" },
    { id: 130, title: "Huawei" },
    { id: 140, title: "Arcatel" },
    { id: 150, title: "Oppo" },
    { id: 160, title: "RealMe" },
  ];

  return (
    <>
      {urls.map((item, index) => (
        <li key={index}>
          <NavLink to={"/detail/" + item.id + "/" + index}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </>
  );
}
