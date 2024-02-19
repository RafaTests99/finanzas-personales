import React from 'react'
import General from '@mui/icons-material/Dashboard';
import Inversiones from '@mui/icons-material/Euro';
import Gastos from '@mui/icons-material/TrendingDown';
import Ingresos from '@mui/icons-material/TrendingUp';
export const SidebarData = [

    {
        title:"General",
        icon:<General/>,
        link:"/"
    },
    {
        title: "Ingresos",
        icon: <Ingresos />,
        link: "/Ingresos"
    },
    {
        title: "Gastos",
        icon: <Gastos />,
        link: "/Gastos"
    },
    {
        title: "Inversiones",
        icon: <Inversiones />,
        link: "/Inversiones"
    }
];


