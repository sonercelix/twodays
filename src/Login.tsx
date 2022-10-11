import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const item = {
    name: "Turkcell",
    year: 20,
    status: true,
  };

  const sendData = () => {
    navigate("/dashboard", { state: item });
  };

  return (
    <>
      <div>Login</div>
      <button onClick={sendData}>SendData</button>
    </>
  );
}
