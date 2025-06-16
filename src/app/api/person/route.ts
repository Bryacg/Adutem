import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET (){
    try{
        const personas = await prisma.persona.findMany();
        return NextResponse.json({ personas });
    }catch(error: any) {
        console.error("Error al obtener personas:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}