import React from "react";
import InsertarGastos from "./InsertarGastos.jsx";
import TablaGastos from "./TablaGastos.jsx";
import GraficosGastos from "./GraficosGastos.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Gastos() {
  return (
    <div className="gastos">
      <InsertarGastos />
      <TablaGastos />
      <ToastContainer />
    </div>
  );
}

export default Gastos;
