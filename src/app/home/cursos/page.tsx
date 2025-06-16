'use client'; // This directive marks the component as a Client Component

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
    {
        field: 'id', headerName: 'ID', type: 'number',
    },
    {
        field: 'nombre', headerName: 'Nombre', width: 150, editable: true, description: 'Primer nombre de la persona.'
    },
    {
        field: 'apellido', headerName: 'Apellido', width: 150, editable: true, description: 'Apellido de la persona.'
    },
    {
        field: 'cedula', headerName: 'Cédula', width: 130, editable: true, description: 'Número de identificación de la persona (único).'
    },
    {
        field: 'fecha_nacimiento', headerName: 'F. Nacimiento', type: 'date', width: 150, editable: true, description: 'Fecha de nacimiento de la persona.'
    },
    {
        field: 'direccion', headerName: 'Dirección', width: 250, editable: true, description: 'Dirección de residencia de la persona.'
    },
    {
        field: 'telefono', headerName: 'Teléfono', width: 150, editable: true, description: 'Número de teléfono de contacto.'
    },
    {
        field: 'nombres_padres', headerName: 'Nombres del Padre', width: 200, editable: true, description: 'Nombre completo del padre o tutor.'
    },
    {
        field: 'nombres_madre', headerName: 'Nombres de la Madre', width: 200, editable: true, description: 'Nombre completo de la madre o tutora.'
    },
    {
        field: 'alergias', headerName: 'Alergias', width: 180, editable: true, description: 'Cualquier alergia conocida (opcional).'
    },
    {
        field: 'tipo_sangre', headerName: 'Tipo de Sangre', width: 130, editable: true, description: 'Tipo de sangre de la persona.'
    },
    {
        field: 'correo', headerName: 'Correo Electrónico', width: 220, editable: true, description: 'Dirección de correo electrónico (única).'
    },
    {
        field: 'creacion_persona', headerName: 'F. Creación', type: 'dateTime', width: 180, editable: false, description: 'Fecha y hora de creación del registro de la persona.'
    }
    /*{ field: 'id', headerName: 'ID', width: 90 }, // Aumentado el ancho ligeramente
    { field: 'firstName', headerName: 'Nombre', width: 180, editable: true }, // Nombres de encabezado en español, editable
    { field: 'lastName', headerName: 'Apellido', width: 180, editable: true }, // Nombres de encabezado en español, editable
    { field: 'age', headerName: 'Edad', type: 'number', width: 100, editable: true,  },
    { field: 'fullName', headerName: 'Nombre Completo', description: 'Esta columna combina el nombre y el apellido.', sortable: false, width: 250, }// Aumentado el ancho  valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`, },*/
];


const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fecthperosn = async () => {
            try {
                const pers = await fetch("/api/curso");
                const data = await pers.json();
                console.log("👀 Datos recibidos:", data);
                const formattedRows = data.personas.map((p: any) => ({
                    ...p,
                    fecha_nacimiento: p.fecha_nacimiento ? new Date(p.fecha_nacimiento) : null,
                    creacion_persona: p.creacion_persona ? new Date(p.creacion_persona) : null,
                }));
                setRows(formattedRows);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        fecthperosn();
    }, [])
    return (
        <Paper
            sx={{
                height: 430,
                width: '100%',
                maxWidth: 1100, // Limita el ancho máximo para mejor lectura en pantallas grandes
                margin: '2rem auto', // Centra el componente y añade margen vertical
                boxShadow: 3, // Añade una sombra de nivel 3 (más pronunciada)
                borderRadius: 2, // Bordes ligeramente más redondeados
                overflow: 'hidden', // Asegura que los bordes redondeados se apliquen a todo el contenido
                border: '1px solid #e0e0e0', // Borde sutil
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                loading={loading}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 25]} // Opciones de tamaño de página adicionales
                checkboxSelection
                disableRowSelectionOnClick // Mejora la usabilidad al no seleccionar filas al hacer clic en ellas
                sx={{
                    '.MuiDataGrid-columnHeaders': {
                        backgroundColor: '#f5f5f5', // Fondo más claro para los encabezados
                        fontWeight: 'bold', // Texto del encabezado en negrita
                        borderBottom: '1px solid #e0e0e0', // Borde inferior en encabezados
                    },
                    '.MuiDataGrid-cell': {
                        borderBottom: '1px dashed #f0f0f0', // Líneas de celda punteadas
                    },
                    '.MuiDataGrid-row:hover': {
                        backgroundColor: '#f9f9f9', // Color de fondo al pasar el ratón por encima de la fila
                    },
                    '& .MuiDataGrid-root': {
                        borderRadius: 'inherit', // Hereda el border-radius del Paper
                    },
                    border: 'none', // Elimina el borde predeterminado del DataGrid, ya que Paper lo gestiona
                }}
            />
        </Paper>
    );
}