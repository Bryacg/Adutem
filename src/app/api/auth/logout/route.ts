import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete('usuario_id');
  return NextResponse.json({ success: true, message: 'Sesión cerrada' });
}
