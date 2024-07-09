
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:NextRequest , res: NextResponse){
    const body = await req.json();
    console.log(body);

    const task = await prisma.task.create({
        data: {
            title: body.title,
            description: body.description,
            dueDate: body.date,
        }
    })
    
    return NextResponse.json(task);
    
}