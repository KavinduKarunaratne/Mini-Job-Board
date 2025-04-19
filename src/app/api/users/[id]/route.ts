import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(
    req: Request,
    { params } : { params: { id: string }}) {
    const { id } = await params;
    const user = await prisma.user.findUnique({
        where: { id: Number(id) }
    })

    return NextResponse.json(
        { message: "Success", user},
        { status: 200}
    )
}