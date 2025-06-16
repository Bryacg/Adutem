import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET (){
    try{
        const convenios = await prisma.convenios.findMany();
        return NextResponse.json({ convenios });
    }catch(error: any) {
        console.error("Error al obtener los convenios:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}