'use client';

import * as React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', type: 'number' },
  { field: 'nombre', headerName: 'Nombre', width: 150, editable: true },
  { field: 'apellido', headerName: 'Apellido', width: 150, editable: true },
  { field: 'cedula', headerName: 'Cédula', width: 130, editable: true },
  { field: 'fecha_nacimiento', headerName: 'F. Nacimiento', type: 'date', width: 150, editable: true },
  { field: 'direccion', headerName: 'Dirección', width: 250, editable: true },
  { field: 'telefono', headerName: 'Teléfono', width: 150, editable: true },
  { field: 'nombres_padres', headerName: 'Nombres del Padre', width: 200, editable: true },
  { field: 'nombres_madre', headerName: 'Nombres de la Madre', width: 200, editable: true },
  { field: 'alergias', headerName: 'Alergias', width: 180, editable: true },
  { field: 'tipo_sangre', headerName: 'Tipo de Sangre', width: 130, editable: true },
  { field: 'correo', headerName: 'Correo Electrónico', width: 220, editable: true },
  { field: 'creacion_persona', headerName: 'F. Creación', type: 'dateTime', width: 180 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function TableDeshabilitar() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  useEffect(() => {
    const fecthperosn = async () => {
      try {
        const pers = await fetch("/api/person");
        const data = await pers.json();
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
  }, []);

  const handleRowSelection = (selectionModel: GridRowSelectionModel) => {
    const selectedId = Array.isArray(selectionModel) && selectionModel.length > 0 ? selectionModel[0] : null;
    const selected = rows.find((row: any) => row.id === selectedId);
    setSelectedRow(selected || null);
  };

  const handleButtonClick = () => {
    if (selectedRow) {
      alert(`Haz clic en la fila con ID: ${selectedRow.id}`);
      // Aquí puedes abrir un modal, redirigir o realizar otra acción
    }
  };

  return (
    <>
      <Paper
        sx={{
          height: 430,
          width: '100%',
          maxWidth: 1100,
          margin: '2rem auto',
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid #e0e0e0',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={handleRowSelection}
          sx={{
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: '#f5f5f5',
              fontWeight: 'bold',
              borderBottom: '1px solid #e0e0e0',
            },
            '.MuiDataGrid-cell': {
              borderBottom: '1px dashed #f0f0f0',
            },
            '.MuiDataGrid-row:hover': {
              backgroundColor: '#f9f9f9',
            },
            '& .MuiDataGrid-root': {
              borderRadius: 'inherit',
            },
            border: 'none',
          }}
        />
      </Paper>

      {selectedRow && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Ver Detalles de ID {selectedRow.id}
          </Button>
        </Box>
      )}
    </>
  );
}
