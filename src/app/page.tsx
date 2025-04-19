import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";


export default async function Home() {
  // const users = await prisma.user.findMany()
  const session = await getSession();
  console.log(session?.user.email)
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

  <div className="bg-white rounded-2xl shadow p-4">
    <h2 className="text-xl font-semibold mb-2">Frontend Developer</h2>
    <p className="text-gray-600 mb-1">Company: Acme Inc.</p>
    <p className="text-gray-600 mb-1">Location: New York, NY</p>
    <p className="text-gray-600 mb-1">Job Type: Full-Time</p>
    <p className="text-gray-700">Build user interfaces using React and Tailwind CSS.</p>
  </div>

  <div className="bg-white rounded-2xl shadow p-4">
    <h2 className="text-xl font-semibold mb-2">Backend Engineer</h2>
    <p className="text-gray-600 mb-1">Company: BetaCorp</p>
    <p className="text-gray-600 mb-1">Location: San Francisco, CA</p>
    <p className="text-gray-600 mb-1">Job Type: Contract</p>
    <p className="text-gray-700">Develop APIs and manage databases using Node.js.</p>
  </div>

  <div className="bg-white rounded-2xl shadow p-4">
    <h2 className="text-xl font-semibold mb-2">UX Designer</h2>
    <p className="text-gray-600 mb-1">Company: DesignPro</p>
    <p className="text-gray-600 mb-1">Location: Remote</p>
    <p className="text-gray-600 mb-1">Job Type: Part-Time</p>
    <p className="text-gray-700">Create user-friendly designs and wireframes.</p>
  </div>

  <div className="bg-white rounded-2xl shadow p-4">
    <h2 className="text-xl font-semibold mb-2">Data Analyst</h2>
    <p className="text-gray-600 mb-1">Company: DataCorp</p>
    <p className="text-gray-600 mb-1">Location: Austin, TX</p>
    <p className="text-gray-600 mb-1">Job Type: Full-Time</p>
    <p className="text-gray-700">Analyze data trends and generate reports.</p>
  </div>

  
</div>

  );
}
/* {users.map((user) => (
        <li key={user.id}>
          <Link href={`/${user.id}`}>{user.email} {user.email}</Link>
        </li>
      ))} */