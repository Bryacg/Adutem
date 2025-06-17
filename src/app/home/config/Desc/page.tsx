import React, { JSX } from "react";

export default function DescPage(): JSX.Element {
  return (
    <div className="min-h-screen text-gray-800 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-10 mb-8">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-2">
          Asociación de Docentes de la Universidad Técnica de Manabí
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-600 mb-6 border-b pb-4 border-gray-200">
          Institución sin fines de lucro
        </h2>

        {/* General Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-lg">
          <div>
            <p className="mb-2">
              Tiene <span className="font-bold text-blue-700">580 socios activos</span> y{' '}
              <span className="font-bold text-blue-700">132 socios jubilados</span>, total{' '}
              <span className="font-bold text-blue-700">712 socios</span>.
            </p>
            <p className="mb-2">
              <span className="font-semibold">Dirección:</span> Chile y Callejón Robles
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span className="font-semibold">Teléfonos:</span> 0999167523 - 052632200
            </p>
            <p className="mb-2">
              <span className="font-semibold">Correos:</span> adutem@utm.edu.ec / adutem@yahoo.com
            </p>
          </div>
        </div>

        {/* Values Section */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6 pt-4 border-t border-gray-200">
          VALORES QUE SE DESCUENTAN A LOS SOCIOS DE ADUTEM
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <section className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Cuota ADUTEM</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-3">$8.50</p>
            <p className="text-sm text-gray-700">
              Valor destinado para el pago de servicios básicos, mantenimiento de las instalaciones (edificio,
              canchas, piscina, salón de juego, etc), pago de personal, impuestos municipales y SRI, cuotas FEPUPE,
              gastos administrativos y celebración del Día del Maestro y Navidad.
            </p>
          </section>

          <section className="bg-red-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-red-800 mb-2">FONDO DE ENFERMEDAD</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-3">$3.39</p>
            <p className="text-sm text-gray-700">
              Valor destinado exclusivamente para ayudar a los compañeros en caso de enfermedades graves, cirugías
              y hospitalizaciones, (COVID) (hasta 200 USD).
            </p>
          </section>

          <section className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-purple-800 mb-2">SEGURO DE VIDA</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-3">$24.98</p>
            <p className="text-sm text-gray-700">
              Cobertura 33,000.00 USD; El valor descontado 24.98 USD se cancela en su totalidad mensualmente a la
              empresa aseguradora, Seguros del Pichincha S.A. **NO ES OBLIGATORIO.** Ver detalle de coberturas.
            </p>
          </section>

          <section className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">CUOTAS DE NÚCLEO</h3>
            <p className="text-lg font-bold text-gray-700 mb-3">
              Agrícola $25; Zootecnia $20 y las demás facultades $10
            </p>
            <p className="text-sm text-gray-700">
              Cada Facultad fija una cuota. Este valor se descuenta a través de ADUTEM y se entrega mensualmente a
              los Núcleos. **NO ES OBLIGATORIO.**
            </p>
          </section>
        </div>

        {/* Facilities Section */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6 pt-4 border-t border-gray-200">
          INSTALACIONES DISPONIBLES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <section className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-green-800 mb-2">PISCINA</h3>
            <p className="text-base text-gray-700">
              El acceso a la piscina es **gratuito** para los docentes-socios de ADUTEM, su esposa/o, hijos o
              nietos. Horario: martes a domingo de 08:00 a 18:00 horas.
            </p>
          </section>

          <section className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-green-800 mb-2">CANCHA DE USO MÚLTIPLE</h3>
            <p className="text-base text-gray-700">
              El uso es **gratuito** para los docentes-socios de ADUTEM. Horario: martes a domingo de 08:00 a 18:00
              horas. Se debe solicitar autorización de uso por escrito.
            </p>
          </section>

          <section className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-orange-800 mb-2">CANCHA SINTÉTICA</h3>
            <p className="text-base text-gray-700">
              Costo para particulares: $25 (noche) / $20 (día). Para docentes-socios de ADUTEM: **$2.50 (noche) /
              $2 (día) de descuento**. Horario: lunes a domingo de 08:00 a 24:00 horas. Solicitar autorización de
              uso por escrito.
            </p>
          </section>

          <section className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-green-800 mb-2">ÁREA DE PARRILLADA</h3>
            <p className="text-base text-gray-700">
              El uso es **gratuito** para los docentes-socios de ADUTEM. Horario: lunes a domingo de 08:00 a 18:00
              horas. Se debe solicitar el uso de este espacio por escrito y cancelar el valor de limpieza.
            </p>
          </section>

          <section className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
            <h3 className="text-xl font-bold text-indigo-800 mb-2">SALÓN DE EVENTOS (120 a 150 personas)</h3>
            <p className="text-base text-gray-700">
              Costo: $200 para particulares y **$150 para docentes-socios de ADUTEM**. Se debe solicitar el uso por
              escrito y cancelar mediante depósito a la cuenta de ADUTEM, al menos un día antes del evento.
            </p>
          </section>
        </div>

        {/* Benefits/Convenios Section */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6 pt-4 border-t border-gray-200">
          BENEFICIOS Y CONVENIOS
        </h1>

        <div className="space-y-6">
          <section className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-700 mb-2">CONVENIOS ADUTEM</h3>
            <p className="text-base text-gray-700">
              Los docentes-socios pueden hacer uso de los convenios con diversas instituciones, donde pueden obtener
              bienes y servicios (medicinas, servicios médicos, lentes, electrodomésticos, llantas para vehículos,
              telefonía celular, ropa) con **crédito directo**. Las cuotas dependerán del monto del crédito. Adjunto
              lista.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-700 mb-2">CONVENIO ADUTEM-UTM-POSGRADO</h3>
            <p className="text-base text-gray-700">
              Los docentes-socios de ADUTEM pueden acceder a **becas para sus familiares** en los diferentes
              programas de Maestrías, cubriendo hasta el **60% del valor de la Maestría**.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-700 mb-2">EVENTOS ACADÉMICOS, DEPORTIVOS Y SOCIALES</h3>
            <p className="text-base text-gray-700">
              Los docentes-socios pueden participar de forma **gratuita** en todos los eventos científicos,
              deportivos y sociales que organice la ADUTEM.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}