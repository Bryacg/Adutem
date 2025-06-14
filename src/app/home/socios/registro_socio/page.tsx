// components/FormularioInscripcion.tsx
export default function FormularioInscripcion() {
  return (
    <section className ="items-center justify-center p-6">
      <form className="item-center justify-center space-y-4 p-4">
        <h2 className="text-xl font-bold">Registro de Soio</h2>

        <label>
          Fecha:
          <input type="date" name="fecha" className="border p-2 w-full" />
        </label>

        <label>
          Nombres y Apellidos:
          <input type="text" name="nombres" className="border p-2 w-full" />
        </label>

        <div className="grid grid-cols-3 gap-4">
          <label>
            C.I.:
            <input type="text" name="ci" className="border p-2 w-full" />
          </label>
          <label>
            Fecha de Nac.:
            <input type="date" name="fecha_nac" className="border p-2 w-full" />
          </label>
          <label>
            Edad:
            <input type="number" name="edad" className="border p-2 w-full" />
          </label>
        </div>

        <label>
          Dirección:
          <input type="text" name="direccion" className="border p-2 w-full" />
        </label>

        <label>
          Teléfonos:
          <input type="text" name="telefonos" className="border p-2 w-full" />
        </label>

        <label>
          Nombre del Padre:
          <input type="text" name="padre" className="border p-2 w-full" />
        </label>

        <label>
          Nombre de la Madre:
          <input type="text" name="madre" className="border p-2 w-full" />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label>
            Alérgico:
            <input type="text" name="alergico" className="border p-2 w-full" />
          </label>
          <label>
            Tipo de Sangre:
            <input type="text" name="sangre" className="border p-2 w-full" />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label>
            Firma del Representante:
            <input type="text" name="firma_representante" className="border p-2 w-full" />
          </label>
          <label>
            Valor Mensualidad:
            <input type="text" name="valor" className="border p-2 w-full" />
          </label>
        </div>
        <h2 className="text-xl font-bold">Autorización Descuento del Rol UTM</h2>

        <p>
          Autorizo a la Asociación de Docentes de la Universidad Técnica de Manabí para que me descuente el valor de:
        </p>

        <label>
          Valor:
          <input type="text" name="valor_descuento" className="border p-2 w-full" />
        </label>

        <p>Por concepto de curso vacacional.</p>

        <label>
          Nombres y Apellidos:
          <input type="text" name="nombres_autoriza" className="border p-2 w-full" />
        </label>

        <label>
          Cédula:
          <input type="text" name="cedula" className="border p-2 w-full" />
        </label>

        <label>
          Facultad:
          <input type="text" name="facultad" className="border p-2 w-full" />
        </label>

        <label>
          Firma:
          <input type="text" name="firma_autoriza" className="border p-2 w-full" />
        </label>
      </form>
    </section>
  );
}
