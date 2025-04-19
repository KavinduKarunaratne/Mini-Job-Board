"use client"

import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        jobType: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            redirect('/dashboard')
        } else {
            console.error('Job creation failed');
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded shadow-md w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-semibold text-center mb-6">Create Job</h2>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter your title"
                        value={formData.title}
                        onChange={handleChange}
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
                        placeholder="Enter your company"
                        value={formData.company}
                        onChange={handleChange}
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
                        value={formData.location}
                        onChange={handleChange}
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
                        value={formData.jobType}
                        onChange={handleChange}
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
                        value={formData.description}
                        onChange={handleChange}
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