// components/PersonasTable.tsx
'use client'; // This directive is necessary for client-side components in App Router

import React, { useEffect, useState } from 'react';
import { persona, tipo_sangre_enum } from '@prisma/client'; // Import Prisma generated types

const PersonasTable: React.FC = () => {
  const [personas, setPersonas] = useState<persona[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const response = await fetch('/api/person'); // Call your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: persona[] = await response.json();
        setPersonas(data);
      } catch (e: any) { // Type 'any' for caught error for simplicity, or define a more specific error type
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonas();
  }, []);

  if (loading) return <p className="text-center mt-8">Cargando personas...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Error: {error}</p>;
  if (personas.length === 0) return <p className="text-center mt-8">No hay personas registradas.</p>;

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-10">
      <h2 className="text-3xl font-serif text-blue-700 font-bold mb-6 text-center">Registro de Personas</h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">Cédula</th>
            <th scope="col" className="py-3 px-6">Nombre Completo</th>
            <th scope="col" className="py-3 px-6">Fecha Nacimiento</th>
            <th scope="col" className="py-3 px-6">Dirección</th>
            <th scope="col" className="py-3 px-6">Teléfono</th>
            <th scope="col" className="py-3 px-6">Correo</th>
            <th scope="col" className="py-3 px-6">Tipo Sangre</th>
            <th scope="col" className="py-3 px-6">Alergias</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona) => (
            <tr key={persona.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {persona.cedula}
              </td>
              <td className="py-4 px-6">
                {persona.nombre} {persona.apellido}
              </td>
              <td className="py-4 px-6">
                {new Date(persona.fecha_nacimiento).toLocaleDateString('es-EC')}
              </td>
              <td className="py-4 px-6">
                {persona.direccion}
              </td>
              <td className="py-4 px-6">
                {persona.telefono}
              </td>
              <td className="py-4 px-6">
                {persona.correo}
              </td>
              <td className="py-4 px-6">
                {persona.tipo_sangre}
              </td>
              <td className="py-4 px-6">
                {persona.alergias || 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonasTable;