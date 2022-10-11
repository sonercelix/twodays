import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import { routes } from "./appRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(routes);
