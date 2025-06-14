export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-green-400 to-red-50 flex flex-col items-center justify-center p-4">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-5xl font-serif text-green-700 font-bold">404 - Página No Encontrada</h1>
        <p className="text-md text-black">Lo sentimos, la página que buscas no existe.</p>
        <a href="/home" className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600">
          Volver al Inicio
        </a>
      </main>
    </div>
  );
}