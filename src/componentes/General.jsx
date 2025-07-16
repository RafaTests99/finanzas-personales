import React, { useState } from "react";
import GeneralNumeros from "./GeneralNumeros";
import GeneralGraficas from "./GeneralGraficas";

function General() {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  const availableYears = [2025, 2024]; // Puedes generar esto dinámicamente si prefieres

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="year-select">Seleccionar año: </label>
        <select id="year-select" value={year} onChange={handleYearChange}>
          {availableYears.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      <GeneralNumeros year={year} />
      <GeneralGraficas year={year} />
    </div>
  );
}

export default General;
