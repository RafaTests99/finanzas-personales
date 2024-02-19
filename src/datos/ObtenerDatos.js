import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


export function ObtenerTotalGastos() {
    const [gastosData, setGastosData] = useState([]);

    useEffect(() => {
        const fetchGastosData = async () => {
            try {
                const gastosSnapshot = await firestore.collection('Gastos').get();

                const gastosDataArray = gastosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setGastosData(gastosDataArray);
            } catch (error) {
                console.error('Error al obtener datos de Firestore:', error);
            }
        };

        fetchGastosData();
    }, []);

    var gastos = 0.0;
    gastosData.map((gasto) => (
        gastos = gastos + gasto.coste
    ));
    return gastos;
}

export function ObtenerGastos() {
    const [gastosData, setGastosData] = useState([]);

    useEffect(() => {
        const fetchGastosData = async () => {
            try {
                const gastosSnapshot = await firestore.collection('Gastos').get();

                const gastosDataArray = gastosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setGastosData(gastosDataArray);
            } catch (error) {
                console.error('Error al obtener datos de Firestore:', error);
            }
        };

        fetchGastosData();
    }, []);

    gastosData.sort((a, b) => {
        return new Date(b.fecha) - new Date(a.fecha);
    });

    return gastosData;
}

export function ObtenerIngresos() {
    const [ingresosData, setIngresosData] = useState([]);

    useEffect(() => {
        const fetchIngresosData = async () => {
            try {
                const ingresosSnapshot = await firestore.collection('Ingresos').get();

                const ingresosDataArray = ingresosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setIngresosData(ingresosDataArray);
            } catch (error) {
                console.error('Error al obtener datos de Firestore:', error);
            }
        };

        fetchIngresosData();
    }, []);

    var ingresos = 0.0;
    ingresosData.map((ingreso) => (
        ingresos = ingresos + ingreso.cantidad
    ));
    return ingresos;
}

export function ObtenerCategorias() {
    const [categoriasData, setCategoriasData] = useState([]);

    useEffect(() => {
        const fetchCategoriasData = async () => {
            try {
                const categoriasSnapshot = await firestore.collection('Categoria').get();

                const categoriasDataArray = categoriasSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setCategoriasData(categoriasDataArray);
            } catch (error) {
                console.error('Error al obtener datos de Firestore:', error);
            }
        };

        fetchCategoriasData();
    }, []);

    var categorias=[];
    categoriasData.map((categoria) => (
        categorias.push(categoria.nombre)
    ));

    return categorias;
}


export async function CrearNuevoGasto(coste, categoria, fecha, descripcion) {
    try {
        // Generar un UUID único para el nombre del documento
        const idGasto = uuidv4();
        await firestore.collection('Gastos').doc(idGasto).set({
            idGasto: idGasto, 
            coste: parseFloat(coste),
            categoria,
            fecha,
            descripcion,
        });

        toast.success('Nuevo gasto insertado con éxito!',{
            autoClose: 3000,
            closeOnClick: true
        });
    } catch (error) {
        toast.error('Error al crear nuevo gasto.',{
            autoClose: 3000,
            closeOnClick: true
        });
    }
}

export async function CrearNuevoIngreso(cantidad, fecha, descripcion) {
    try {
        const ingresosSnapshot = await firestore.collection('Ingresos').get();
        const idIngreso = ingresosSnapshot.docs.length + 1;
        var nombreDoc = "Ingreso" + idIngreso;
        await firestore.collection('Ingresos').doc(nombreDoc).set({
            idIngreso: parseInt(idIngreso),
            cantidad: parseFloat(cantidad),            
            fecha,
            descripcion,
        });

        toast.success('Nuevo ingreso insertado con éxito!',{
            autoClose: 3000,
            closeOnClick: true
        });
    } catch (error) {
        toast.error('Error al crear nuevo ingreso.',{
            autoClose: 3000,
            closeOnClick: true
        });
    }
}

export function TotalGastadoMensual(año){
    const [gastosData, setGastosData] = useState([]);
    const [ingresosData, setIngresosData] = useState([]);

    const gastosMensuales= [
        {
            name: "Ene",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Feb",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Mar",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Abr",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "May",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Jun",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Jul",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Ago",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Sep",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Oct",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Nov",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
        {
            name: "Dic",
            "Total ingresado": 0.0,
            "Total gastado": 0.0,
        },
    ];

    useEffect(() => {
        const fetchGastosData = async () => {
            try {
                const gastosSnapshot = await firestore.collection('Gastos').get();

                const gastosDataArray = gastosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setGastosData(gastosDataArray);
            } catch (error) {
                console.error('Error al obtener datos de Firestore:', error);
            }
        };

        fetchGastosData();
    }, []);

    useEffect(() => {
        const fetchIngresosData = async () => {
            try {
                const ingresosSnapshot = await firestore.collection('Ingresos').get();

                const ingresosDataArray = ingresosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setIngresosData(ingresosDataArray);
            } catch (error) {
                console.error('Error al obtener datos de Firestore:', error);
            }
        }; 
        fetchIngresosData();
    }, []);


    gastosData.map((gasto) => {
        var fecha = gasto.fecha.split("-");
        if(fecha[0] == año){
            switch(fecha[1]){
                
                case "01":
                    gastosMensuales[0]["Total gastado"] += gasto.coste;
                    break;
                case "02":
                    gastosMensuales[1]["Total gastado"] += gasto.coste;
                    break;
                case "03":
                    gastosMensuales[2]["Total gastado"] += gasto.coste;
                    break;
                case "04":
                    gastosMensuales[3]["Total gastado"] += gasto.coste;
                    break;
                case "05":
                    gastosMensuales[4]["Total gastado"] += gasto.coste;
                    break;
                case "06":
                    gastosMensuales[5]["Total gastado"] += gasto.coste;
                    break;
                case "07":
                    gastosMensuales[6]["Total gastado"] += gasto.coste;
                    break;
                case "08":
                    gastosMensuales[7]["Total gastado"] += gasto.coste;
                    break;
                case "09":
                    gastosMensuales[8]["Total gastado"] += gasto.coste;
                    break;
                case "10":
                    gastosMensuales[9]["Total gastado"] += gasto.coste;
                    break;
                case "11":
                    gastosMensuales[10]["Total gastado"] += gasto.coste;
                    break;
                case "12":
                    gastosMensuales[11]["Total gastado"] += gasto.coste;
                    break;
                default:
                    break;
            }
        }
    });

    ingresosData.map((ingreso) => {
        var fecha = ingreso.fecha.split("-");
        if(fecha[0] == año){
            switch(fecha[1]){
                
                case "01":
                    gastosMensuales[0]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "02":
                    gastosMensuales[1]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "03":
                    gastosMensuales[2]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "04":
                    gastosMensuales[3]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "05":
                    gastosMensuales[4]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "06":
                    gastosMensuales[5]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "07":
                    gastosMensuales[6]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "08":
                    gastosMensuales[7]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "09":
                    gastosMensuales[8]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "10":
                    gastosMensuales[9]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "11":
                    gastosMensuales[10]["Total ingresado"] += ingreso.cantidad;
                    break;
                case "12":
                    gastosMensuales[11]["Total ingresado"] += ingreso.cantidad;
                    break;
                default:
                    break;
            }
        }
    });

    // Crear un array de objetos con pares de mes y total gastado
    const resultados = gastosMensuales.map(mes => ({
        mes: mes.name,
        "Ingresado": mes["Total ingresado"],
        "Gastado": mes["Total gastado"]
    }));

    return resultados;
}

export function TotalGastadoCategoria(año){
    const [gastosData, setGastosData] = useState([]);
    const [categoriasData, setCategoriasData] = useState([]);

    const categorias = ObtenerCategorias();
    const gastosCategorias= categorias.map((categoria) => ({
        name: categoria,
        "Total": 0.0,
    }));


    
    useEffect(() => {
        const fetchGastosData = async () => {
            try {
                const gastosSnapshot = await firestore.collection('Gastos').get();

                const gastosDataArray = gastosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setGastosData(gastosDataArray);
            } catch (error) {
                console.error('Error al obtener datos de Firestore:', error);
            }
        };

        fetchGastosData();
    }, []);

    gastosData.map((gasto) => {
        var fecha = gasto.fecha.split("-");
        if(fecha[0] == año){
            gastosCategorias.map((categoria) => {
                if(categoria.name == gasto.categoria){
                    categoria["Total"] += gasto.coste;
                }
            });
        }
    });

    // Crear un array de objetos con pares de categoria y total gastado
    const resultados = gastosCategorias.map(categoria => ({
        categoria: categoria.name,
        "Total": categoria["Total"],
    }));

    return resultados;


}
