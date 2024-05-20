import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const jobs = [
    { id: 1, title: 'Software Engineer', date: '2024-05-01', status: 0 },
    { id: 2, title: 'Product Manager', date: '2024-05-03', status: 1 },
    // Add more job entries as needed for pagination
];

const ManagePosts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 3;

    // Get current jobs
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderStatus = (status) => {
        switch (status) {
            case 1:
                return <p className='bg-red-500
                text-center rounded text-white text-sm'>Closed</p>

            case 0:
                return <p className='bg-green-500
                    text-center rounded text-white text-sm'>Open</p>


            default:
                return <p className='bg-black
                    text-center rounded text-white text-sm'>NOT FOUND</p>;
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Manage Posts</h2>
                <Link to="/add-offer" className="bg-blue-500 text-white py-2 px-4 rounded">Add Post</Link>
                {/* <button >Add Post</button> */}
            </div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-300 text-left">Job Title</th>
                        <th className="py-2 px-4 border-b border-gray-300 text-left">Date Posted</th>
                        <th className="py-2 px-4 border-b border-gray-300 text-left">Status</th>
                        <th className="py-2 px-4 border-b border-gray-300 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {currentJobs.map((job) => (
                        <tr key={job.id}>
                            <td className="py-2 px-4 border-b border-gray-300 text-left">{job.title}</td>
                            <td className="py-2 px-4 border-b border-gray-300 text-left">{job.date}</td>
                            <td className="py-2 px-4 border-b border-gray-300 text-left">{renderStatus(job.status)}</td>
                            <td className="py-2 px-4 border-b border-gray-300 text-left">
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded text-xs'>Change Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white border-gray-300 text-black'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ManagePosts;
