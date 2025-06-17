import { prisma } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";


export async function GET() {
    try {
        const personas = await prisma.persona.findMany();
        return NextResponse.json({ personas });
    } catch (error: any) {
        console.error("Error al obtener personas:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}

export async function POST(request: NextRequest) {
   try {
    const body = await request.json();

    const {
      nombre,
      apellido,
      cedula,
      fecha_nacimiento,
      direccion,
      telefono,
      nombres_padres,
      nombres_madre,
      alergias,
      tipo_sangre,
      correo,
    } = body;

    // Validación básica
    if (
      !nombre ||
      !apellido ||
      !cedula ||
      !fecha_nacimiento ||
      !direccion ||
      !telefono ||
      !nombres_padres ||
      !nombres_madre ||
      !tipo_sangre ||
      !correo
    ) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const nuevaPersona = await prisma.persona.create({
      data: {
        nombre,
        apellido,
        cedula,
        fecha_nacimiento: new Date(fecha_nacimiento),
        direccion,
        telefono,
        nombres_padres,
        nombres_madre,
        alergias,
        tipo_sangre,
        correo,
      },
    });

    return NextResponse.json(nuevaPersona, { status: 201 });

  } catch (error: any) {
    console.error("Error al crear persona:", error);

    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'La cédula o correo ya está registrado' }, { status: 409 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}