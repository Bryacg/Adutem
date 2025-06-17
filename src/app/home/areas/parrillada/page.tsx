"use client";
import { useState, ChangeEvent, FormEvent, JSX } from 'react';

// Define an interface for the form data to ensure type safety
interface FormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  requestDate: string;
  requestStartTime: string;
  requestEndTime: string;
  numberOfGuests: string; // Storing as string for input, convert to number for backend
  bbqEquipmentNeeded: string[]; // To store multiple selections for equipment
  specialRequests: string;
}

export default function RequestBBQArea(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    requestDate: '',
    requestStartTime: '',
    requestEndTime: '',
    numberOfGuests: '',
    bbqEquipmentNeeded: [], // Initialize as an empty array
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
      const currentEquipment = prevData.bbqEquipmentNeeded;
      if (checked) {
        return {
          ...prevData,
          bbqEquipmentNeeded: [...currentEquipment, value],
        };
      } else {
        return {
          ...prevData,
          bbqEquipmentNeeded: currentEquipment.filter((item) => item !== value),
        };
      }
    });
  };

  // Type the event for form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // In a real application, you'd send this formData to your backend API
    console.log('Formulario de Solicitud de Área de Parrillada Enviado:', formData);
    alert('¡Tu solicitud para el área de parrillada ha sido enviada! Nos pondremos en contacto pronto.');
    // Clear the form after submission
    setFormData({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      requestDate: '',
      requestStartTime: '',
      requestEndTime: '',
      numberOfGuests: '',
      bbqEquipmentNeeded: [],
      specialRequests: '',
    });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 w-full ">
      {/* Changed max-w-md to max-w-xl to make the form wider */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Solicitud de Área de Parrillada</h1>
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
              placeholder="Ej: Sofía López"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Detalles de la Reserva</h2>
          <div>
            <label htmlFor="requestDate" className="block text-sm font-medium text-gray-700">Fecha Deseada</label>
            <input
              type="date"
              id="requestDate"
              name="requestDate"
              value={formData.requestDate}
              onChange={handleChange}
              required
              // Set minimum date to today (or tomorrow if you prefer bookings in advance)
              min={new Date().toISOString().split('T')[0]}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="requestStartTime" className="block text-sm font-medium text-gray-700">Hora de Inicio</label>
              <input
                type="time"
                id="requestStartTime"
                name="requestStartTime"
                value={formData.requestStartTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="requestEndTime" className="block text-sm font-medium text-gray-700">Hora de Fin</label>
              <input
                type="time"
                id="requestEndTime"
                name="requestEndTime"
                value={formData.requestEndTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <div>
            <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700">Número Estimado de Invitados</label>
            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleChange}
              placeholder="Ej: 15"
              min="1"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div className="mt-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">Equipo de Parrillada Necesario (Seleccione todos los que apliquen)</span>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="bbqEquipmentNeeded"
                  value="parrilla-carbon"
                  checked={formData.bbqEquipmentNeeded.includes('parrilla-carbon')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Parrilla de carbón</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  name="bbqEquipmentNeeded"
                  value="parrilla-gas"
                  checked={formData.bbqEquipmentNeeded.includes('parrilla-gas')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Parrilla de gas</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="bbqEquipmentNeeded"
                  value="utensilios"
                  checked={formData.bbqEquipmentNeeded.includes('utensilios')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Juego de utensilios</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  name="bbqEquipmentNeeded"
                  value="mesas-sillas"
                  checked={formData.bbqEquipmentNeeded.includes('mesas-sillas')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Mesas y sillas adicionales</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="bbqEquipmentNeeded"
                  value="hielo-cooler"
                  checked={formData.bbqEquipmentNeeded.includes('hielo-cooler')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-gray-700">Hielo y cooler</span>
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
              placeholder="Ej: Necesito acceso a un toma corriente, habrá música, etc."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
}