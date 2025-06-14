// components/ComprobanteEgreso.tsx
export default function ComprobanteEgreso() {
  return (
    <form className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Comprobante de Egreso - ADUTEM</h2>

      <label>
        Fecha:
        <input type="date" name="fecha" className="border p-2 w-full" />
      </label>

      <label>
        Beneficiario:
        <input type="text" name="beneficiario" className="border p-2 w-full" />
      </label>

      <label>
        Valor:
        <input type="text" name="valor" className="border p-2 w-full" />
      </label>

      <label>
        Concepto:
        <textarea name="concepto" className="border p-2 w-full" rows={3} defaultValue="Pago del sueldo correspondiente a noviembre 2024, menos el seguro de vida de..." />
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label>
          Cheque No.:
          <input type="text" name="cheque" className="border p-2 w-full" />
        </label>
        <label>
          Banco:
          <input type="text" name="banco" className="border p-2 w-full" />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label>
          Tesorera:
          <input type="text" name="tesorera" className="border p-2 w-full" defaultValue="Ec. Susetty Gómez García" />
        </label>
        <label>
          Presidenta:
          <input type="text" name="presidenta" className="border p-2 w-full" defaultValue="Dra. Mónica Murillo Mora" />
        </label>
      </div>
    </form>
  );
}
