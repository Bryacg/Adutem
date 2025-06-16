'use client'; // This directive marks the component as a Client Component

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
/*id         Int      @id @default(autoincrement())
  nombre     String   @db.VarChar(100)
  descripcion String?
  usuario_id Int
  usuario */
const columns: GridColDef[] = [
    {
        field: 'id', headerName: 'ID', type: 'number',
    },
    {
        field: 'nombre', headerName: 'Nombre', width: 150, editable: true, description: 'Primer nombre de la persona.'
    },
    {
        field: 'descripcion', headerName: 'descripcion', width: 150, editable: true, description: 'Apellido de la persona.'
    },
    {
        field: 'usuario_id', headerName: 'usuario_id', type: 'number'
    },
    {
        field: 'usuario', headerName: 'F. usuario', type: 'number'
    },

];


const paginationModel = { page: 0, pageSize: 5 };

export default function Convenios() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fecthperosn = async () => {
            try {
                const pers = await fetch("/api/convenios");
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