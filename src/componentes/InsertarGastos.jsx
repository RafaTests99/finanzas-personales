import React from "react";
import "./Gastos.css";
import { ObtenerCategorias, CrearNuevoGasto } from "../datos/ObtenerDatos";

function InsertarGastos() {
  // Mueve la función InsertarGasto dentro del componente
  function InsertarGasto() {
    var coste = document.getElementById("amount").value;
    var categoria = document.getElementById("category").value; // Cambié el id a "category"
    var fecha = document.getElementById("date").value;
    var nota = document.getElementById("expense-name").value;
    CrearNuevoGasto(coste, categoria, fecha, nota);
  }

  return (
    <div className="container">
      <p> Insertar Gasto </p>
      <div className="form-group">
        <input
          id="amount"
          className="input"
          placeholder="Cantidad"
          type="number"
        />
      </div>
      <div className="form-group">
        <div className="select-container">
          {/* Cambié el id a "category" */}
          <select id="category">
            <option value="" key="1" disabled selected>
              Seleccione una categoría
            </option>
            {ObtenerCategorias().map((categoria) => {
              return (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              );
            })}
          </select>
        </div>
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
      <button className="submit-btn" type="submit" onClick={InsertarGasto}>
        Guardar
      </button>
    </div>
  );
}

export default InsertarGastos;
