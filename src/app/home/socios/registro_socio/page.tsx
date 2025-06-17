// components/FormularioInscripcion.tsx
export default function FormularioInscripcion() {
  return (

    // Sigue centrando el contenido.
    <section className="max-w-3xl w-full p-8 rounded-xl  border-gray-200 ">
      {/*
        Fondo del contenedor del formulario con 80% de opacidad (casi transparente).
        Puedes ajustar el '80' a '70', '60', etc., para mayor o menor transparencia.
        El 'backdrop-blur-sm' difumina lo que hay detrás del formulario.
      */}
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200 backdrop-blur-sm">
        <form className="space-y-6">
          {/* Encabezado para la Sección de Registro */}
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            Registro de Socio
          </h2>

          {/* Campos del Formulario - Información Personal */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700 font-medium">Nombres:</span>
              <input
                type="text"
                name="nombres"
                placeholder="Ingrese nombres completos"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Apellidos:</span>
              <input
                type="text"
                name="Apellidos"
                placeholder="Ingrese Apellidos completos"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700 font-medium">C.I.:</span>
                <input type="text" name="ci" placeholder="Ej: 0987654321" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out" />
              </label>
              <label className="block">
                <span className="text-gray-700 font-medium">Fecha de Nac.:</span>
                <input type="date" name="fecha_nac" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out" />
              </label>

            </div>

            <label className="block">
              <span className="text-gray-700 font-medium">Dirección:</span>
              <input
                type="text"
                name="direccion"
                placeholder="Calle y número, ciudad"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Teléfonos:</span>
              <input
                type="text"
                name="telefonos"
                placeholder="Ej: 0987654321, 052345678"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Nombre del Padre:</span>
              <input
                type="text"
                name="padre"
                placeholder="Nombres completos del padre"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Nombre de la Madre:</span>
              <input
                type="text"
                name="madre"
                placeholder="Nombres completos de la madre"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700 font-medium">Valor Mensualidad:</span>
                <input type="text" name="valor" placeholder="Ej: $50.00" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out" />
              </label>
              
              <label className="block">
                <span className="text-gray-700 font-medium">Tipo de Sangre:</span>
                <select
                  name="sangre"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                >
                  <option value="">Seleccione su tipo de sangre</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </label>
            </div>

            
              <label className="block">
                <span className="text-gray-700 font-medium">Alérgico:</span>
                <input
                  type="text"
                  name="alergico"
                  placeholder="Especifique alergias si aplica"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                />
              </label>
              
            
          </div>

          {/* Separador */}
          <hr className="my-8 border-gray-300" />



          {/* Botón de Envío */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Enviar Registro
            </button>
          </div>
        </form>

      </div>
    </section >
  );
}