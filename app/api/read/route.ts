import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(){
    const tasks = await prisma.task.findMany({});
    
    console.log(tasks);

    return NextResponse.json(tasks);
}