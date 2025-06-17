
// components/FormularioInscripcion.tsx
export default function FormularioInscripcion() {
  return (
    <form className="max-w-3xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg space-y-6 border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Formulario de Registro - Curso Vacacional</h2>

      {/* Datos del Curso */}
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Fecha Inicio:</span>
          <input
            type="date"
            name="fecha"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Fecha Final:</span>
          <input
            type="date"
            name="fecha"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Nombres:</span>
          <input
            type="text"
            name="nombres"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Nombres del Curso"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Dirección:</span>
          <input
            type="text"
            name="direccion"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Dirección completa"
          />
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Hora Inicio:</span>
            <input
              type="time"
              name="hora_inicio"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Hora Final:</span>
            <input
              type="time"
              name="Hora Final"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </label>
        </div>
      </div>

      {/* Datos del profesor */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Datos del Profesor</h3>
        <div className="space-y-4">
          <div className="pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-gray-700 font-medium mb-1 block">Nombre:</span>
                <input
                  type="text"
                  name="Nombres"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Nombre del Profesor"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-medium mb-1 block">Apellidos:</span>
                <input
                  type="text"
                  name="Apellidos"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Apellidos del Profesor"
                />
              </label>
            </div>
          </div>


          <label className="block">
            <span className="text-gray-700 font-medium mb-1 block">Teléfonos:</span>
            <input
              type="text"
              name="telefonos"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Ej: 0987654321, 052345678"
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