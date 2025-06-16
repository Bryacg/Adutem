"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ correo, contraseña }),
    });

    const data = await res.json();
    if (data.success) {
      
      alert("Bienvenido a ADUTEM");
      router.push("/home");
    } else {
      alert("Credenciales incorrectas");
      setError(data.error || "Error al iniciar sesión");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <header className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-serif text-green-700 font-bold">ADUTEM</h1>
          <h2 className="text-md font-semibold mt-2 text-center tracking-wide text-black">
            ASOCIACIÓN DE DOCENTE DE LA <br /> UNIVERSIDAD TECNICA DE MANABÍ
          </h2>
        </header>

        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-2xl p-8 w-80"
        >
          <label className="block text-sm font-semibold mb-1">
            <span className="text-black font-bold">Usuario</span>
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="border border-green-600 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-300 text-black"
            placeholder="@utm.edu.ec"
          />
          {error && <p className="text-red-500">{error}</p>}

          <label className="block text-left mb-2">
            <span className="text-black font-bold">Contraseña</span>
          </label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className="border border-green-600 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-300 text-black"
            placeholder="Introduce acá la contraseña"
          />

          <div>
            <Link href="/invitado" className="text-black">
              Entrar como persona invitada
            </Link>
          </div>
          <div>
            <Link href="/recuperacion_cuenta" className="text-black">
              olvidaste tu contraseña
            </Link>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-full mt-4 hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>

        <Link href="#">
          <span className="text-black">Registrar Usuario</span>
        </Link>
      </div>
    </main>
  );
}
