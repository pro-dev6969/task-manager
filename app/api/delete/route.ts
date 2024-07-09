import { PrismaClient } from "@prisma/client";
import { NextRequest , NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest , res:NextResponse){
    const body = await req.json();

    const response = await prisma.task.delete({
        where: { id: body.id },
        
    })

    return NextResponse.json(response);
}