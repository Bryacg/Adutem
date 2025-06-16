import { prisma } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";


export async function GET (request: NextRequest) {
    try{
        const{ searchParams} = new URL(request.url);
        const id = searchParams.get('id');
        let personas;

        if(id){
             personas = await prisma.persona.findUnique({where:{ id: Number(id) },});

             if (!id) {
            return NextResponse.json({ message: "Persona no encontrada" }, { status: 404 });
            personas = [personas];
            }
        
        
      }else{
        personas = await prisma.persona.findMany();
      }
      
        return NextResponse.json({ personas });
    }catch(error: any) {
        console.error("Error al obtener personas:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}