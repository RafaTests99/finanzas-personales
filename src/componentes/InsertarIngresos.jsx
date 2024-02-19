import React from "react";
import "./Gastos.css";
import { CrearNuevoIngreso } from "../datos/ObtenerDatos";

function InsertarIngresos() {
  function InsertarIngreso() {
    var cantidad = document.getElementById("amount").value;
    var fecha = document.getElementById("date").value;
    var nota = document.getElementById("expense-name").value;
    CrearNuevoIngreso(cantidad, fecha, nota);
  }

  return (
    <div className="container">
      <p> Insertar Ingreso </p>
      <div className="form-group">
        <input
          id="amount"
          className="input"
          placeholder="Cantidad"
          type="number"
        />
      </div>
      <div className="form-group">
        <input id="date" className="input" type="date" />
      </div>
      <div className="form-group">
        <input
          id="expense-name"
          className="input"
          placeholder="Descripción"
          autoComplete="off"
        />
      </div>
      <button className="submit-btn" type="submit" onClick={InsertarIngreso}>
        Guardar
      </button>
    </div>
  );
}

export default InsertarIngresos;
