import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function handleDelete(formData: FormData) {
    "use server";
  
    const id = formData.get("id");
    if (!id) return;
  
    await fetch(`http://localhost:3000/api/jobs/${id}`, {
      method: "DELETE",
    });

    redirect("/dashboard")
  }

export default async function Dashboard() {
  const session = await getSession();
  const email = session?.user?.email;

  const user = await prisma.user.findUnique({
    where: { email: String(email)}
  })

  const jobs = await prisma.job.findMany({
    where: {
      userId: user?.id ? Number(user.id) : undefined
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-end mb-4">
          <Link href="/dashboard/create">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Create
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3">Title</th>
                <th className="p-3">Company</th>
                <th className="p-3">Location</th>
                <th className="p-3">Job Type</th>
                <th className="p-3">Description</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-t">
                  <td className="p-3">{job.title}</td>
                  <td className="p-3">{job.company}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">{job.jobType}</td>
                  <td className="p-3">{job.description}</td>
                  <td className="p-3">
                    <form action={handleDelete}>
                      <input type="hidden" name="id" value={job.id} />
                      <button
                        type="submit"
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
