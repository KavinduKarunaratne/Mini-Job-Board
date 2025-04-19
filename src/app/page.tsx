"use client"

import { useEffect, useState } from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  jobType: string;
  description: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs'); // Replace with your actual API endpoint
        const data: Job[] = await response.json();
        console.log(data)
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {jobs.jobs.map((job) => (
        <div key={job.id} className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
          <p className="text-gray-600 mb-1">Company: {job.company}</p>
          <p className="text-gray-600 mb-1">Location: {job.location}</p>
          <p className="text-gray-600 mb-1">Job Type: {job.jobType}</p>
          <p className="text-gray-700">{job.description}</p>
        </div>
      ))}
    </div>
  );
}