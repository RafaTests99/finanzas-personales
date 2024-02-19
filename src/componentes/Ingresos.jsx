import React from "react";
import InsertarIngresos from "./InsertarIngresos.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Ingresos() {
  return (
    <div>
      <InsertarIngresos />
      <ToastContainer />
    </div>
  );
}

export default Ingresos;
