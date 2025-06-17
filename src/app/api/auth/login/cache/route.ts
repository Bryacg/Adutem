import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const cookieStore = cookies();
  const userId = (await cookieStore).get('usuario_id');

  if (!userId) {
    return NextResponse.json({ usuario: null }, { status: 401 });
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: parseInt(userId.value) },
      include: { persona: true }, // Asegúrate que existe la relación persona
    });

    if (!usuario) {
      return NextResponse.json({ usuario: null }, { status: 404 });
    }

    return NextResponse.json({
      usuario: {
        nombre: usuario.persona?.nombre || 'Sin nombre',
        apellido: usuario.persona?.apellido || 'Sin apellido',
        correo: usuario.correo,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
