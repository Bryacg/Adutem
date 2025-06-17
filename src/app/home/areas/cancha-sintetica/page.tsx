"use client";
import { useState, ChangeEvent, FormEvent, JSX } from 'react';

// Define an interface for the form data to ensure type safety
interface FormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  sportType: string;
  reservationDate: string;
  reservationStartTime: string;
  reservationEndTime: string;
  numberOfPlayers: string; // Storing as string for input, convert to number for backend
  fieldSizePreference: string; // e.g., 5v5, 7v7, 11v11
  equipmentNeeded: string[]; // To store multiple selections for equipment
  specialRequests: string;
}

export default function ReserveSyntheticField(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    sportType: '',
    reservationDate: '',
    reservationStartTime: '',
    reservationEndTime: '',
    numberOfPlayers: '',
    fieldSizePreference: '',
    equipmentNeeded: [], // Initialize as an empty array
    specialRequests: '',
  });

  // Handle changes for text inputs, select, and textarea
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes for checkboxes
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const currentEquipment = prevData.equipmentNeeded;
      if (checked) {
        return {
          ...prevData,
          equipmentNeeded: [...currentEquipment, value],
        };
      } else {
        return {
          ...prevData,
          equipmentNeeded: currentEquipment.filter((item) => item !== value),
        };
      }
    });
  };

  // Type the event for form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // In a real application, you'd send this formData to your backend API
    console.log('Formulario de Reserva de Cancha Sintética Enviado:', formData);
    alert('¡Tu solicitud para la cancha sintética ha sido enviada! Nos pondremos en contacto pronto.');
    // Clear the form after submission
    setFormData({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      sportType: '',
      reservationDate: '',
      reservationStartTime: '',
      reservationEndTime: '',
      numberOfPlayers: '',
      fieldSizePreference: '',
      equipmentNeeded: [],
      specialRequests: '',
    });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 w-full ">
      {/* Changed max-w-md to max-w-xl to make the form wider */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Reserva de Cancha Sintética</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Información de Contacto</h2>
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              placeholder="Ej: Carlos Mejía"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="clientEmail"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleChange}
              placeholder="Ej: tu_correo@ejemplo.com"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
            <input
              type="tel"
              id="clientPhone"
              name="clientPhone"
              value={formData.clientPhone}
              onChange={handleChange}
              placeholder="Ej: 0987654321"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Detalles de la Reserva</h2>
          <div>
            <label htmlFor="sportType" className="block text-sm font-medium text-gray-700">Tipo de Deporte</label>
            <select
              id="sportType"
              name="sportType"
              value={formData.sportType}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
            >
              <option value="">Seleccione el deporte</option>
              <option value="futbol">Fútbol</option>
              <option value="indor-futbol">Fútbol (Indor)</option>
              <option value="basquetbol">Básquetbol</option>
              <option value="voleibol">Voleibol</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="reservationDate" className="block text-sm font-medium text-gray-700">Fecha de Reserva</label>
            <input
              type="date"
              id="reservationDate"
              name="reservationDate"
              value={formData.reservationDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]} // Prevents selecting past dates
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="reservationStartTime" className="block text-sm font-medium text-gray-700">Hora de Inicio</label>
              <input
                type="time"
                id="reservationStartTime"
                name="reservationStartTime"
                value={formData.reservationStartTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="reservationEndTime" className="block text-sm font-medium text-gray-700">Hora de Fin</label>
              <input
                type="time"
                id="reservationEndTime"
                name="reservationEndTime"
                value={formData.reservationEndTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <div>
            <label htmlFor="numberOfPlayers" className="block text-sm font-medium text-gray-700">Número Estimado de Jugadores</label>
            <input
              type="number"
              id="numberOfPlayers"
              name="numberOfPlayers"
              value={formData.numberOfPlayers}
              onChange={handleChange}
              placeholder="Ej: 10"
              min="2"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="fieldSizePreference" className="block text-sm font-medium text-gray-700">Preferencia de Tamaño de Cancha</label>
            <select
              id="fieldSizePreference"
              name="fieldSizePreference"
              value={formData.fieldSizePreference}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
            >
              <option value="">Cualquier tamaño</option>
              <option value="5v5">Cancha 5 vs 5</option>
              <option value="7v7">Cancha 7 vs 7</option>
              <option value="11v11">Cancha 11 vs 11</option>
              <option value="multi-uso">Cancha de Uso Múltiple</option>
            </select>
          </div>

          <div className="mt-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">Equipo Adicional Necesario (Opcional)</span>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="equipmentNeeded"
                  value="balones"
                  checked={formData.equipmentNeeded.includes('balones')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Balones</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  name="equipmentNeeded"
                  value="petos"
                  checked={formData.equipmentNeeded.includes('petos')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Petos / Chalecos</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="equipmentNeeded"
                  value="conos"
                  checked={formData.equipmentNeeded.includes('conos')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Conos</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  name="equipmentNeeded"
                  value="arbitro"
                  checked={formData.equipmentNeeded.includes('arbitro')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Árbitro</span>
              </label>
              {/* Add more options as needed */}
            </div>
          </div>

          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">Solicitudes Especiales / Notas</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={3}
              placeholder="Ej: Necesitamos camerinos, hay un jugador con discapacidad, etc."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-150 ease-in-out"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Enviar Solicitud de Reserva
          </button>
        </form>
      </div>
    </div>
  );
}