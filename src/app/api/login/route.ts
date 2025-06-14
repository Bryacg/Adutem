
import { prisma } from "@/lib/db";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const userr = await prisma.usuario.findMany();
    return NextResponse.json({ userr });
  } catch (error: any) {
    console.error("Error");
    return NextResponse.json({ error: error.message }, { status: 500 });


  }

}
/*
export async function POST(request: NextRequest) {
    const { correo, contraseña } = await request.json();

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { correo },
      include: {
        persona: true,
      },
    });

    if (!usuario) {
      return NextResponse.json({ error: 'Correo no registrado' }, { status: 401 });
    }

    const valid = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!valid) {
      return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
    }

    return NextResponse.json({
      message: 'Login exitoso',
      usuario: {
        id: usuario.id,
        correo: usuario.correo,
        persona: usuario.persona,
      },
    });
  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}*/


export async function POST(request: NextRequest) {

  try {
    const body = await request.json();
    const { correo, contraseña } = body;

    // Buscar el usuario por correo
    const usuario = await prisma.usuario.findUnique({ where: { correo }, include: { persona: true, } });
    // Verificar si el usuario existe
    if (!usuario) {
      return NextResponse.json({ success: false, message: 'Correo no registrado' }, { status: 401 });
    }
    // Verificar la contraseña
    if (usuario.contraseña !== contraseña) {
      return NextResponse.json({ success: false, message: 'Contraseña incorrecta' }, { status: 401 });
    }
    // Si todo es correcto, devolver una respuesta exitosa
    const response = NextResponse.json({ success: true, message: 'Inicio Exitoso', usuario: { id: usuario.id, correo: usuario.correo, persona: usuario.persona } });

    
    
    // Guardar el ID del usuario en una cookie

    const cookieStore = await cookies();
    cookieStore.set('usuario_id', usuario.id.toString(), { httpOnly: true, sameSite: 'lax', path: '/' });
    
    return response
  } catch (error: any) {
    console.error("Error en login:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }


}