import { getSession } from "@/lib/session"
import Link from "next/link";

export default async function Dashboard() {
    const session = await getSession();
    return (
        <>
            <h1>Dashboard Page</h1>
            <Link href="/dashboard/create">Create</Link>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
    )
}