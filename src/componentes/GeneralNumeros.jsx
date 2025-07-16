import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import {
  ObtenerTotalGastos,
  ObtenerIngresos,
  ObtenerIngresosPorAño,
  ObtenerTotalGastosPorAño,
} from "../datos/ObtenerDatos";
import CountUp from "react-countup";
import { Card, Metric, Text } from "@tremor/react";

function GeneralNumeros({ year }) {
  var ingresosTotales = ObtenerIngresos();
  var ingresosPorAño = ObtenerIngresosPorAño(year);
  var gastosTotales = ObtenerTotalGastos();
  var gastosPorAño = ObtenerTotalGastosPorAño(year);
  //var inversionTotal = 950;
  var beneficioTotal = ingresosPorAño - gastosPorAño;
  var porcentajeAhorro = (beneficioTotal / ingresosPorAño) * 100;
  return (
    <div className="General">
      <Card className="card">
        <Text>Total Ingresos</Text>
        <Metric>
          <CountUp
            start={0}
            end={ingresosPorAño}
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
            end={-gastosPorAño}
            duration={2}
            delay={0}
            separator=","
            decimals={2}
          />
          €
        </Metric>
      </Card>
      {/* <Card className="card">
        <Text>Total invertido</Text>
        <Metric>
          <CountUp
            start={0}
            end={inversionTotal}
            duration={2}
            delay={0}
            separator=","
            decimals={2}
          />
          €
        </Metric>
      </Card> */}
      <Card className="card">
        <Text>Ahorro + Inversión</Text>
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
