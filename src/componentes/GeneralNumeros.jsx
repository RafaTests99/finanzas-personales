import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { ObtenerTotalGastos, ObtenerIngresos } from "../datos/ObtenerDatos";
import CountUp from "react-countup";
import { Card, Metric, Text } from "@tremor/react";

function GeneralNumeros() {
  var ingresosTotales = ObtenerIngresos();
  var gastosTotales = ObtenerTotalGastos();
  var inversionTotal = 450;
  var beneficioTotal = ingresosTotales - gastosTotales - inversionTotal;
  var porcentajeAhorro = (beneficioTotal / ingresosTotales) * 100;
  return (
    <div className="General">
      <Card className="card">
        <Text>Total Ingresos</Text>
        <Metric>
          <CountUp
            start={0}
            end={ingresosTotales}
            duration={2}
            delay={0}
            separator=","
            decimals={2}
          />
          €
        </Metric>
      </Card>
      <Card className="card">
        <Text>Total Gastos</Text>
        <Metric>
          <CountUp
            start={0}
            end={-gastosTotales}
            duration={2}
            delay={0}
            separator=","
            decimals={2}
          />
          €
        </Metric>
      </Card>
      <Card className="card">
        <Text>Total invertido</Text>
        <Metric>
          <CountUp
            start={0}
            end={-inversionTotal}
            duration={2}
            delay={0}
            separator=","
            decimals={2}
          />
          €
        </Metric>
      </Card>
      <Card className="card">
        <Text>Total Beneficio</Text>
        <Metric>
          <CountUp
            start={0}
            end={beneficioTotal}
            duration={2}
            delay={0}
            separator=","
            decimals={2}
          />
          €
        </Metric>
      </Card>
      <Card className="card">
        <Text>Porcentaje ahorro</Text>
        <Metric>
          <CountUp
            start={0}
            end={porcentajeAhorro}
            duration={2}
            delay={0}
            separator=","
            decimals={2}
          />
          %
        </Metric>
      </Card>
    </div>
  );
}

export default GeneralNumeros;
