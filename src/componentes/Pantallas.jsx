import React from 'react'
import General from './General.jsx';
import Ingresos from './Ingresos.jsx';
import Gastos from './Gastos.jsx';
import Inversiones from './Inversiones.jsx';
function Pantallas() {
  return (
    <div className='view'>
    {window.location.pathname == "/" ? <General /> : null}
    {window.location.pathname == "/Ingresos" ? <Ingresos /> : null}
    {window.location.pathname == "/Gastos" ? <Gastos /> : null}
    {window.location.pathname == "/Inversiones" ? <Inversiones /> : null}
    </div>
  )
}

export default Pantallas
