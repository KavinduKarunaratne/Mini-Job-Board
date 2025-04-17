import { getSession, login } from "@/lib/session"
import { redirect } from "next/navigation";

export default async function Login() {
    const session = await getSession();
    return (
        <>
            <form action={async (formData) => {
                "use server"
                await login(formData);
                redirect('/')
            }}>
                <input type="email" name="email" id="email" placeholder="Email" />
                <br />
                <button type="submit">Login</button>
            </form>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
        
    )
}