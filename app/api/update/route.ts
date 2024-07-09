import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:NextRequest){
    
    const body = await req.json();

    const res = await prisma.task.update({
        where: { id: body.id },
        data: {
            title : body.title,
            description: body.description,
            dueDate: body.date.toString(),
        }
    })

    return NextResponse.json({"message": "udated successfully"})

}