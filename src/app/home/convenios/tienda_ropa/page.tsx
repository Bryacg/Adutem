export default function Tienda_ropa() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tl  from-green-400 to-red-50 flex flex-col items-center justify-center p-2">
      
      <h1 className="text-5xl font-serif text-green-700 font-bold">ADUTEM</h1>
      <h2 className="text-md font-semibold mt-2 text-center tracking-wide text-black">ASOCIACIÓN DE DOCENTE DE LA <br /> UNIVERSIDAD TECNICA DE MANABÍ </h2>
      
      <section className="flex flex-col  items-start my-10">
        <h2 className="text-5xl font-serif text-green-700 font-bold">BOUTIQUE AMIGOS</h2>
        <h3 className="text-md font-semibold mt-2 text-center tracking-wide text-black">DIRECIÓN:</h3>
        <p className="text-md text-black">Calle Mejia</p>
        <h3 className="text-md font-semibold mt-2 text-center tracking-wide text-black">TELÉFONO:</h3>
        <p className="text-md text-black">0984969253</p>
        <h3 className="text-md font-semibold mt-2 text-center tracking-wide text-black">ACTIVIDAD O SERVICIO QUE PRESTAN:</h3>
        <p className="text-md text-black">Ropas, Carteras y Zapatos</p>
      </section>

      <section className="flex flex-col  items-start my-10">
        <h2 className="text-5xl font-serif text-green-700 font-bold">COMECSA</h2>
        <h3 className="text-md font-semibold mt-2 text-center tracking-wide text-black">DIRECIÓN:</h3>
        <p className="text-md text-black">Ricaurte entre Ramos Iduarte y Quito</p>
        <h3 className="text-md font-semibold mt-2 text-center tracking-wide text-black">ACTIVIDAD O SERVICIO QUE PRESTAN:</h3>
        <p className="text-md text-black">Ropas, Carteras y Zapatos</p>
      </section>
     
    </div>
  );
}