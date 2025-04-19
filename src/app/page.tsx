import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";


export default async function Home() {
  // const users = await prisma.user.findMany()
  const session = await getSession();
  console.log(session?.user.email)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
