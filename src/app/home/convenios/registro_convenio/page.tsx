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
            Registro de Convenios
          </h2>

          {/* Campos del Formulario - Información Personal */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700 font-medium">Tipo de Convenio:</span>
              <input
                type="text"
                name="nombres"
                placeholder="Ingrese el tipo de convenio"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Nombre:</span>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese el nombre del convenio"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">Datos:</span>
              <input
                type="text"
                name="datos"
                placeholder="Ingrese los datos del convenio"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700 font-medium">Numero de Telefono:</span>
                <input type="text" name="telefono" placeholder="Ej: 0987654321" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out" />
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
              <span className="text-gray-700 font-medium">Actividad o Servicio que Prestan</span>
              <input
                type="text"
                name="servicio"
                placeholder="Servicio que presta el convenio"
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