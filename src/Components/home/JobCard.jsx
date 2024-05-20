import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ company, image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
      <img src={image} alt={company} className="w-16 h-16 rounded-5 mr-4" />
      <div>
        <Link to="job-description">
          <h3 className="text-lg font-semibold">{title}</h3>
        </Link>
        <p className="text-gray-600"><Link to="company-profile">{company}</Link></p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default JobCard;
