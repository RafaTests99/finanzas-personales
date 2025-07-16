import React from "react";
import { BarChart, Card, Title, Subtitle } from "@tremor/react";
import {
  TotalGastadoMensual,
  TotalGastadoCategoria,
} from "../datos/ObtenerDatos";
const valueFormatter = (number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}€`;

function GeneralGraficas({ year }) {
  return (
    <div className="contenedor-graficas">
      <div className="grafica grafica1">
        <Card>
          <Title>Gastos totales mensualmente</Title>
          <Subtitle>Los datos mostrados son para {year}.</Subtitle>
          <BarChart
            className="mt-6"
            data={TotalGastadoMensual(year)}
            index="mes"
            categories={["Ingresado", "Gastado"]}
            colors={["blue", "red"]}
            valueFormatter={valueFormatter}
            yAxisWidth={48}
          />
        </Card>
        <Card>
          <Title>Gastos mensuales por categoría</Title>
          <Subtitle>Los datos mostrados son para {year}.</Subtitle>
          <BarChart
            className="mt-6"
            data={TotalGastadoCategoria(year)}
            index="categoria"
            categories={["Total"]}
            colors={["blue"]}
            valueFormatter={valueFormatter}
            yAxisWidth={48}
          />
        </Card>
      </div>
      <div className="grafica grafica2">Gráfica 2</div>
    </div>
  );
}

export default GeneralGraficas;
