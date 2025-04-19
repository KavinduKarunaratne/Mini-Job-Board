import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET() {
    const jobs = await prisma.job.findMany()
    return NextResponse.json(
        {message: "Jobs retrieved successfully", jobs},
        {status: 200}
    )
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const session = await getSession();
        const email = session?.user.email;
        const user = await prisma.user.findUnique({
            where: { email: String(email)}
        })
        if (!user) {
            throw new Error("User not found");
        }
        
        if (!body.title || !body.company || !body.location || !body.jobType || !body.description) {
            return NextResponse.json(
                { message: 'Missing required fields', body},
                { status: 400 }
            );
        }

        const job = await prisma.job.create({
            data: {
                title: body.title,
                company: body.company,
                location: body.location,
                jobType: body.jobType,
                description: body.description,
                userId: user.id
            }
        })

        return NextResponse.json(
            {message: "Job created successfully", job},
            {status: 201}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Failed to create job", error: error instanceof Error ? error.message : String(error)},
            {status: 500}
        )
    }
}