import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!body.email || !body.password) {
            return NextResponse.json(
                { message: 'Missing required fields', body},
                { status: 400 }
            );
        }

        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
            }
        })

        return NextResponse.json(
            {message: "User created successfully", user},
            {status: 201}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Failed to create user", error: error instanceof Error ? error.message : String(error)},
            {status: 500}
        )
    }
}