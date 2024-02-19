import React from 'react'
import Sidebar from './componentes/Sidebar.jsx';
import Pantallas from './componentes/Pantallas.jsx';
import Navbar from './componentes/Navbar.jsx';
import "./App.css";
import MenuIcon from '@mui/icons-material/Menu';
function main() {
  return (
    <div className='App'>
      <Navbar />
      <Pantallas />
    </div>
  )
}

export default main;