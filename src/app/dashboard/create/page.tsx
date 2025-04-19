import { redirect } from "next/navigation";

export default async function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded shadow-md w-full max-w-md"
                // action={}
            >
                <h2 className="text-2xl font-semibold text-center mb-6">Create Job</h2>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter your title"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Enter your company name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Enter your location"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="jobType" className="block text-gray-700 mb-2">Job Type</label>
                    <input
                        type="text"
                        name="jobType"
                        id="jobType"
                        placeholder="Enter your job type"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Enter your description"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Create Job
                </button>
            </form>
        </div>
    );
}