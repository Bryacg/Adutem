import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET (){
    try{
        const curso = await prisma.cursos.findMany();
        return NextResponse.json({ curso });
    }catch(error: any) {
        console.error("Error al obtener los convenios:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}