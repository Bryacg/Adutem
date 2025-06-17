'use client'; // Solo si estás en el directorio app/ de Next.js 13+

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { set } from 'react-hook-form';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [usuario, setUsuario] = useState<{ nombre: string, correo: string, apellido: string } | null>(null);
  

  //Carga usuario desde a cookie
  useEffect(() => {
    fetch('/api/auth/login/cache')
      .then(res => res.json()
        .then(data => {
          if (data.usuario ) {
            setUsuario(data.usuario);
            
          }
        }))
      .catch(() => {
        setUsuario(null)
      }
      )
  }, [])

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className=" bg-white">
      <div className="w-full  sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e identidad */}
          <div className="flex items-center">
            <Link href="/home" className="flex items-center space-x-2">
              <Image src="/estat.png" alt="estat" width={40} height={30} />
              <span className="text-2xl font-bold text-green-700">ADUTEM</span>
            </Link>
          </div>

          {/* Menú del usuario */}
          <div className="relative hidden md:flex items-center space-x-4" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex text-sm bg-gray-300 rounded-full focus:ring-4 focus:ring-gray-300"
            >
              <span className="sr-only">Abrir menú de usuario</span>
              <Image src="/estat.png" alt="estat" width={30} height={15} />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-14 z-50 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 ">{usuario?.nombre} {usuario?.apellido}</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{usuario?.correo}</span>
                </div>
                <ul className="py-2">
                  <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 ">Perfil</a></li>
                  <li><a href="/home/config/Desc" className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-200 ">Configuracion</a></li>

                  <li><a href="/" className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-200 ">Cerrar Sesión</a></li>
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}
