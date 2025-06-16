import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server"; // Importa NextRequest para acceder a los parámetros de la URL

export async function GET(request: NextRequest) { // La función ahora recibe el objeto request
  try {
    // Obtener los parámetros de búsqueda de la URL
    const { searchParams } = new URL(request.url);

    // Obtener el parámetro 'id'
    const idParam = searchParams.get('id');

    let curso;

    if (idParam) {
      // Si se proporciona un 'id', buscar un curso específico
      // Convertimos el id a entero ya que en tu esquema es de tipo Int
      const id = parseInt(idParam, 10);

      if (isNaN(id)) {
        return NextResponse.json({ message: "ID de curso no válido" }, { status: 400 });
      }

      curso = await prisma.cursos.findUnique({
        where: {
          id: id, // Filtrar por el ID proporcionado
        },
      });

      // Si no se encuentra el curso, devuelve un 404
      if (!curso) {
        return NextResponse.json({ message: "Curso no encontrado" }, { status: 404 });
      }
      // Envuelve el curso encontrado en un array para mantener consistencia
      curso = [curso];
    } else {
      // Si no se proporciona ningún 'id', obtener todos los cursos
      curso = await prisma.cursos.findMany();
    }

    return NextResponse.json({ curso }, { status: 200 }); // Siempre devuelve un array de cursos
  } catch (error: any) {
    console.error("Error al obtener cursos:", error);
    // Devuelve un mensaje de error más específico para el usuario
    return NextResponse.json({ error: error.message || "Error interno del servidor al obtener cursos" }, { status: 500 });
  }
}