import { getSession } from "@/lib/session";

export default async function Jobs() {
    const session = await getSession();
    return (
        <>
            <h1>Jobs Page</h1>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
    )
}
