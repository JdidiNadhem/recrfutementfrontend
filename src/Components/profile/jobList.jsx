import React, { useState } from 'react'

const jobs = [
    { id: 1, title: 'Software Engineer', date: '2024-05-01', status: 1 },
    { id: 2, title: 'Product Manager', date: '2024-05-03', status: 3 },
    { id: 3, title: 'Data Analyst', date: '2024-05-05', status: 2 },
    { id: 4, title: 'UX Designer', date: '2024-05-06', status: 0 },
    { id: 5, title: 'Backend Developer', date: '2024-05-07', status: 3 },
    { id: 6, title: 'Marketing Manager', date: '2024-05-08', status: 3 },
    // Add more job entries as needed for pagination
];

const JobList = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 3;

    // Get current jobs
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    // const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const renderStatus = (status) => {
        switch (status) {
            case 0:
                return <p className='bg-yellow-500
                text-center rounded text-white 
            '>In progress</p>

            case 1:
                return <p className='bg-blue-500
                text-center rounded text-white'>Pending</p>

            case 2:
                return <p className='bg-red-500
                text-center rounded text-white'>Rejected</p>

            case 3:
                return <p className='bg-green-500
                    text-center rounded text-white'>Accepted</p>


            default:
                return <p className='bg-black
                    text-center rounded text-white'>NOT FOUND</p>;
        }
    }

    return (
        <div>
            <h1 className='text-2xl mb-10'>Job List</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-300 text-left">Job Title</th>
                        <th className="py-2 px-4 border-b border-gray-300 text-center">Date Applied</th>
                        <th className="py-2 px-4 border-b border-gray-300">Status</th>
                        <th className="py-2 px-4 border-b border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job.id}>
                            <td className="py-2 px-4 border-b border-gray-300">{job.title}</td>
                            <td className="py-2 px-4 border-b border-gray-300">{job.date}</td>
                            <td className="py-2 px-4 border-b border-gray-300"><p className='bg-yellow
                             text-center rounded text-white'>{renderStatus(job.status)}</p></td>
                            <td className="py-2 px-4 border-b border-gray-300">
                                <button className="bg-blue-500 text-white py-1 px-3 rounded">
                                    See Offer
                                </button>
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
    )
}

export default JobList
