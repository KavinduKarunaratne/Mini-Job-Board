import { prisma } from "@/lib/prisma";
import { getSession, logout } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function Home() {
  // const users = await prisma.user.findMany()
      const session = await getSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/jobs"}>Jobs</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/login"}>Login</Link>
        <form
          action={async () => {
            "use server";
            await logout();
            redirect("/");
          }}
          >
          <button type="submit">Logout</button>
        </form>
      </nav>
      {/* {users.map((user) => (
        <li key={user.id}>
          <Link href={`/${user.id}`}>{user.email} {user.email}</Link>
        </li>
      ))} */}
      <h1>/ Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
