import { getSession } from "@/lib/session"

export default async function Dashboard() {
    const session = await getSession();
    return (
        <>
            <h1>Dashboard Page</h1>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
    )
}