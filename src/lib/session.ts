import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = "") {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"]
        });
        return payload;
    } catch (error) {
        console.log("Failed to verify session")
    }
}

export async function login(formData: FormData) {

    const user = { email: formData.get("email") }

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ user, expiresAt })
    const cookieStore = await cookies()

    cookieStore.set("session", session, {
        httpOnly: true,
        expires: expiresAt,
    })
}

export async function logout() {
    const cookieStore = await cookies()
    
    cookieStore.set("session", "", { expires: new Date(0)})
}

export async function getSession() {
    const session = (await cookies()).get("session")?.value;
    if(!session) return null
    return await decrypt(session);
}

export async function updateSession(req: NextRequest) {}