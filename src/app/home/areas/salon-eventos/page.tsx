"use client";
import { useState, ChangeEvent, FormEvent, JSX } from 'react';

// Define an interface for the form data to ensure type safety
interface FormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  eventName: string;
  eventType: string;
  eventDate: string;
  eventStartTime: string;
  eventEndTime: string;
  attendeeEstimate: string; // Storing as string for simpler input, convert to number for backend
  decorationNeeds: string;
  cateringNeeds: string;
  equipmentNeeds: string; // e.g., sound system, projector
  notes: string;
}

export default function RentEventHall(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    eventName: '',
    eventType: '',
    eventDate: '',
    eventStartTime: '',
    eventEndTime: '',
    attendeeEstimate: '',
    decorationNeeds: '',
    cateringNeeds: '',
    equipmentNeeds: '',
    notes: '',
  });

  // Type the event for input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Type the event for form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Here you would typically send the formData to your backend API
    console.log('Formulario de Alquiler de Salón de Eventos Enviado:', formData);
    alert('¡Tu solicitud para el salón de eventos ha sido enviada! Nos pondremos en contacto pronto.');
    // You might want to clear the form or redirect the user after submission
    setFormData({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      eventName: '',
      eventType: '',
      eventDate: '',
      eventStartTime: '',
      eventEndTime: '',
      attendeeEstimate: '',
      decorationNeeds: '',
      cateringNeeds: '',
      equipmentNeeds: '',
      notes: '',
    });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 w-full ">
      {/* Changed max-w-md to max-w-xl to make the form wider */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">{/* Increased max-w for more fields */}
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Solicitud para Alquiler de Salón de Eventos</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Información del Cliente</h2>
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              placeholder="Ej: Ana García"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Detalles del Evento</h2>
          <div>
            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Nombre del Evento (Opcional)</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Ej: Boda de Juan y María"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Tipo de Evento</label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            >
              <option value="">Seleccione el tipo de evento</option>
              <option value="boda">Boda</option>
              <option value="cumpleanos">Cumpleaños</option>
              <option value="fiesta-corporativa">Fiesta Corporativa</option>
              <option value="conferencia">Conferencia/Seminario</option>
              <option value="graduacion">Graduación</option>
              <option value="social">Evento Social</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Fecha del Evento</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventStartTime" className="block text-sm font-medium text-gray-700">Hora de Inicio</label>
              <input
                type="time"
                id="eventStartTime"
                name="eventStartTime"
                value={formData.eventStartTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="eventEndTime" className="block text-sm font-medium text-gray-700">Hora de Fin</label>
              <input
                type="time"
                id="eventEndTime"
                name="eventEndTime"
                value={formData.eventEndTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <div>
            <label htmlFor="attendeeEstimate" className="block text-sm font-medium text-gray-700">Número Estimado de Asistentes</label>
            <input
              type="number" // Use type="number" for attendee count
              id="attendeeEstimate"
              name="attendeeEstimate"
              value={formData.attendeeEstimate}
              onChange={handleChange}
              placeholder="Ej: 100"
              min="1" // Minimum 1 attendee
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Servicios Adicionales (Opcional)</h2>
          <div>
            <label htmlFor="decorationNeeds" className="block text-sm font-medium text-gray-700">Necesidades de Decoración</label>
            <textarea
              id="decorationNeeds"
              name="decorationNeeds"
              value={formData.decorationNeeds}
              onChange={handleChange}
              rows={3}
              placeholder="Ej: Temática floral, luces LED, área de fotos, etc."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            ></textarea>
          </div>

          <div>
            <label htmlFor="cateringNeeds" className="block text-sm font-medium text-gray-700">Necesidades de Catering</label>
            <textarea
              id="cateringNeeds"
              name="cateringNeeds"
              value={formData.cateringNeeds}
              onChange={handleChange}
              rows={3}
              placeholder="Ej: Servicio de cena (buffet/emplatado), barra de bebidas, aperitivos, etc."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            ></textarea>
          </div>

          <div>
            <label htmlFor="equipmentNeeds" className="block text-sm font-medium text-gray-700">Equipo Especial Requerido</label>
            <textarea
              id="equipmentNeeds"
              name="equipmentNeeds"
              value={formData.equipmentNeeds}
              onChange={handleChange}
              rows={3}
              placeholder="Ej: Sistema de sonido con micrófonos, proyector y pantalla, escenario, etc."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            ></textarea>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notas Adicionales</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Cualquier otra información relevante para su evento."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
          >
            Enviar Solicitud de Alquiler
          </button>
        </form>
      </div>
    </div>
  );
}