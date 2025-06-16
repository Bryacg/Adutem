// components/ComprobanteEgreso.tsx
export default function ComprobanteEgreso() {
  return (
    <form className="max-w-2xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg space-y-6 border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Comprobante de Egreso - ADUTEM</h2>

      <div className="space-y-4">
        

        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Beneficiario:</span>
          <input
            type="text"
            name="beneficiario"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Nombre del beneficiario"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Valor:</span>
          <input
            type="text"
            name="valor"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="$0.00"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Concepto:</span>
          <textarea
            name="concepto"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            rows={4}
            defaultValue="Pago del sueldo correspondiente a noviembre 2024, menos el seguro de vida de..."
            placeholder="Detalle del concepto de egreso"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Cheque No.:</span>
          <input
            type="text"
            name="cheque"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Número de cheque"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Banco:</span>
          <input
            type="text"
            name="banco"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Nombre del banco"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Tesorera:</span>
          <input
            type="text"
            name="tesorera"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            defaultValue="Ec. Susetty Gómez García"
            readOnly // Often these fields might be read-only if they are pre-filled
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">Presidenta:</span>
          <input
            type="text"
            name="presidenta"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            defaultValue="Dra. Mónica Murillo Mora"
            readOnly // Often these fields might be read-only if they are pre-filled
          />
        </label>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out text-lg"
        >
          Generar Comprobante
        </button>
      </div>
    </form>
  );
}
