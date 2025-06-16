// components/FormularioInscripcion.tsx
export default function FormularioInscripcion() {
  return (
    <form className="max-w-3xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg space-y-6 border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Formulario de Inscripción - Curso Vacacional</h2>

      {/* General Information Section */}
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Fecha:</span>
          <input
            type="date"
            name="fecha"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Nombres y Apellidos:</span>
          <input
            type="text"
            name="nombres"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Nombres completos del estudiante"
          />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">C.I.:</span>
            <input
              type="text"
              name="ci"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Número de cédula"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Fecha de Nac.:</span>
            <input
              type="date"
              name="fecha_nac"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Edad:</span>
            <input
              type="number"
              name="edad"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Edad en años"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Dirección:</span>
          <input
            type="text"
            name="direccion"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Dirección completa"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Teléfonos:</span>
          <input
            type="text"
            name="telefonos"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Número(s) de contacto"
          />
        </label>
      </div>

      {/* Parent Information Section */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Datos del Representante</h3>
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Nombre del Padre:</span>
            <input
              type="text"
              name="padre"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Nombre completo del padre"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Nombre de la Madre:</span>
            <input
              type="text"
              name="madre"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Nombre completo de la madre"
            />
          </label>
        </div>
      </div>

      {/* Health Information Section */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Información Médica</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Alérgico (a qué):</span>
            <input
              type="text"
              name="alergico"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Ej: Polvo, medicamentos, alimentos"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Tipo de Sangre:</span>
            <input
              type="text"
              name="sangre"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Ej: O+, A-, AB+"
            />
          </label>
        </div>
      </div>

      {/* Final Details Section */}
      <div className="pt-4 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Firma del Representante:</span>
            <input
              type="text"
              name="firma_representante"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Nombre del representante que firma"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Valor Mensualidad:</span>
            <input
              type="text"
              name="valor"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="$0.00"
            />
          </label>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out text-lg"
        >
          Inscribir Estudiante
        </button>
      </div>
    </form>
  );
}
