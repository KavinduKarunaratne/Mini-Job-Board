import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params } : { params: { id: string }}
) {
    const { id } = await params;
    const job = await prisma.job.findUnique({
        where: { id: Number(id) }
    })

    return NextResponse.json(
        { message: "Success", job},
        { status: 200}
    )
}

export async function PUT(
    req: Request,
    { params } : { params: { id: string }}
) {
    try {
        const { id } = await params;
        const body = await req.json();

        if (!body.title || !body.company || !body.location || !body.jobType || !body.description) {
            return NextResponse.json(
                { message: 'Missing required fields', body},
                { status: 400 }
            );
        }

        const job = await prisma.job.update({
            where: { id: Number(id) },
            data: {
                title: body.title,
                company: body.company,
                location: body.location,
                jobType: body.jobType,
                description: body.description
            }
        })

        return NextResponse.json(
            {message: "Job Updated Successfully", job},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Failed to update job", error: error instanceof Error ? error.message : String(error)},
            {status: 500}
        )
        
    }
}

export async function DELETE(
    req: Request,
    { params } : { params: { id: string }}
) {
    try {
        const session = await getSession();
        const email = session?.user.email;
        const user = await prisma.user.findUnique({
            where: { email: String(email)}
        })
        if (!user) {
            throw new Error("User not found");
        }
        const { id } = await params;

        const job = await prisma.job.delete({
            where: { id: Number(id) }
        })

        return NextResponse.json(
            {message: "Job deleted successfully"},
            {status: 200}
        )

    } catch (error) {
        return NextResponse.json(
            {message: "Failed to delete job", error},
            {status: 500}
        )
    }
}