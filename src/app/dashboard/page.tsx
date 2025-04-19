import { getSession } from "@/lib/session"
import Link from "next/link";

export default async function Dashboard() {
    return (
        <>
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
                        <tr className="border-t">
                            <td className="p-3">Frontend Developer</td>
                            <td className="p-3">OpenAI</td>
                            <td className="p-3">San Francisco</td>
                            <td className="p-3">Full-Time</td>
                            <td className="p-3">Work on AI tools</td>
                            <td className="p-3">
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </>
    )
}