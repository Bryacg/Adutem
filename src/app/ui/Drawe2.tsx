"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FiMenu, FiX, FiChevronDown, FiChevronUp,
  FiUser, FiEdit3, FiDollarSign, FiBookOpen,
  FiActivity, FiHeart, FiMapPin, FiSmile
} from "react-icons/fi";

export default function Draweru() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSocios, setOpenSocios] = useState(false);
  const [openCursos, setOpenCursos] = useState(false);
  const [openAreas, setOpenAreas] = useState(false);
  const [openConvenios, setOpenConvenios] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-16 left-4 z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md"
        aria-label="Abrir menú"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {isOpen && <div className="fixed inset-0 bg-transparent z-40" onClick={() => setIsOpen(false)} />}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="text-lg font-bold">MENÚ PRINCIPAL</span>
          <button onClick={() => setIsOpen(false)}><FiX className="w-5 h-5" /></button>
        </div>

        <div className="p-4 space-y-2">
          {/* SOCIOS */}
          <div>
            <button onClick={() => setOpenSocios(!openSocios)} className="flex items-center justify-between w-full font-semibold hover:underline">
              <span className="flex items-center gap-2"><FiUser /> Socios</span>
              {openSocios ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openSocios && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/home/socios" className="flex items-center gap-2 hover:underline">Ver socios</Link>
                <Link href="/home/socios/registro_socio" className="flex items-center gap-2 hover:underline"><FiEdit3 /> Registrar socio</Link>
                <Link href="/home/socios/deshabilitar" className="flex items-center gap-2 hover:underline">Deshabilitar socios</Link>
              </div>
            )}
          </div>

          {/* CURSOS VACACIONALES */}
          <div>
            <button onClick={() => setOpenCursos(!openCursos)} className="flex items-center justify-between w-full font-semibold hover:underline">
              <span className="flex items-center gap-2"><FiBookOpen /> Cursos Vacacionales</span>
              {openCursos ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openCursos && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/home/cursos" className="flex items-center gap-2 hover:underline">Ver cursos</Link>
                <Link href="/home/cursos/registrar" className="flex items-center gap-2 hover:underline">Registrar curso</Link>
                <Link href="/home/cursos/gestion" className="flex items-center gap-2 hover:underline">Gestionar inscripciones</Link>
              </div>
            )}
          </div>

          {/* EGRESOS */}
          <div>
            <Link href="/home/egreso" className="flex items-center gap-2 font-semibold hover:underline">
              <FiDollarSign /> Comprobantes de Egreso
            </Link>
            <Link href="/home/egreso/comprobante_egreso" className="flex items-center gap-2 pl-4 hover:underline">
              <FiEdit3 /> Registrar egreso
            </Link>
          </div>

          {/* ÁREAS RECREATIVAS */}
          <div>
            <button
              onClick={() => setOpenAreas(!openAreas)}
              className="flex items-center justify-between w-full font-semibold hover:underline"
            >
              <span className="flex items-center gap-2"><FiMapPin /> Áreas Recreativas</span>
              {openAreas ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {openAreas && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/areas/piscina" className="flex items-center gap-2 hover:underline">
                  <FiActivity /> Piscina
                </Link>
                <Link href="/areas/cancha-multiple" className="flex items-center gap-2 hover:underline">
                  <FiActivity /> Cancha múltiple
                </Link>
                <Link href="/areas/cancha-sintetica" className="flex items-center gap-2 hover:underline">
                  <FiActivity /> Cancha sintética
                </Link>
                <Link href="/areas/parrillada" className="flex items-center gap-2 hover:underline">
                  <FiSmile /> Area Parrillada
                </Link>
                <Link href="/areas/salon-eventos" className="flex items-center gap-2 hover:underline">
                  <FiMapPin /> Salón de eventos
                </Link>
              </div>
            )}
          </div>

          {/* CONVENIOS */}
          <div>
            <button onClick={() => setOpenConvenios(!openConvenios)} className="flex items-center justify-between w-full font-semibold hover:underline">
              <span className="flex items-center gap-2"><FiHeart /> Convenios</span>
              {openConvenios ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openConvenios && (
              <div className="pl-4 mt-1 space-y-1">
                <Link href="/home/convenios" className="flex items-center gap-2 hover:underline">Ver convenios</Link>
                <Link href="/home/convenios/registro_convenio" className="flex items-center gap-2 hover:underline">Registrar convenio</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
