import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function Home() {
  const users = await prisma.user.findMany()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/${user.id}`}>{user.name} {user.email}</Link>
        </li>
      ))}
    </div>
  );
}
