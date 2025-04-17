import { NextRequest, NextResponse } from "next/server";
import { decrypt, updateSession } from "./lib/session";
import { cookies } from "next/headers";

const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/signup']

export async function middleware(req: NextRequest) {
    // await updateSession(req);
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    // if (isProtectedRoute && !session?.userId) {
    //     return NextResponse.redirect(new URL('/login', req.nextUrl))
    // }

    // if (
    //     isPublicRoute &&
    //     session?.user &&
    //     !req.nextUrl.pathname.startsWith('/dashboard')
    // ) {
    //     return NextResponse.redirect(new URL('dashboard', req.nextUrl))
    // }
      
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }
  