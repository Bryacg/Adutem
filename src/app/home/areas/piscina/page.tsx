"use client";
import { useState, ChangeEvent, FormEvent, JSX } from 'react';

// Define an interface for the form data to ensure type safety
interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  duration: string;
  poolSize: string;
  notes: string;
}

export default function ReservePool(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '1', // Default to 1 hour
    poolSize: '',
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
    console.log('Formulario de Reserva de Piscina Enviado:', formData);
    alert('¡Tu solicitud ha sido enviada! Nos pondremos en contacto pronto.');
    // You might want to clear the form or redirect the user after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      duration: '1',
      poolSize: '',
      notes: '',
    });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 w-full ">
      {/* Changed max-w-md to max-w-xl to make the form wider */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Solicitud para Apartar una Piscina</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ej: tu_correo@ejemplo.com"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej: 0987654321"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha de Reserva</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora de Inicio</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duración (horas)</label>
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            >
              <option value="1">1 hora</option>
              <option value="2">2 horas</option>
              <option value="3">3 horas</option>
              <option value="4">4 horas</option>
              <option value="all-day">Todo el día</option>
            </select>
          </div>

          <div>
            <label htmlFor="poolSize" className="block text-sm font-medium text-gray-700">Tipo/Tamaño de Piscina</label>
            <select
              id="poolSize"
              name="poolSize"
              value={formData.poolSize}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            >
              <option value="">Seleccione el tipo de piscina</option>
              <option value="familiar">Piscina Familiar</option>
              <option value="semi-olimpica">Piscina Semi-Olímpica</option>
              <option value="infantil">Piscina Infantil</option>
              <option value="jacuzzi">Jacuzzi</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notas Adicionales (Opcional)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3} // Changed from "3" to 3 for number type
              placeholder="Ej: Necesito acceso para silla de ruedas, traeré flotadores, etc."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
}