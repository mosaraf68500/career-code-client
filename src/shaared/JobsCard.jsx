import React, { useState } from "react";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    title,
    _id,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-[#f9fafb] p-1 rounded-3xl">
      <div className="bg-white rounded-3xl shadow-xl p-6 space-y-6 transition-transform hover:scale-[1.02] duration-300">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>

        {/* Job Summary */}
        <div className="grid gap-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">📍 Location:</span> {location}
          </p>
          <p>
            <span className="font-medium">🕒 Type:</span> {jobType}
          </p>
          <p>
            <span className="font-medium">📂 Category:</span> {category}
          </p>
          <p>
            <span className="font-medium">⏳ Deadline:</span>{" "}
            {applicationDeadline}
          </p>
          <p>
            <span className="font-medium">📌 Status:</span> {status}
          </p>
          {salaryRange?.min && salaryRange?.max && (
            <p>
              <span className="font-medium">💰 Salary:</span> ${salaryRange.min}{" "}
              - ${salaryRange.max}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-800 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Details Toggle */}
        {showDetails && (
          <>
            {/* Requirements */}
            {requirements?.length > 0 && (
              <div>
                <h3 className="text-md font-semibold text-gray-900 mb-1">
                  ✅ Requirements:
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Responsibilities */}
            {responsibilities?.length > 0 && (
              <div>
                <h3 className="text-md font-semibold text-gray-900 mb-1">
                  📝 Responsibilities:
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {responsibilities.map((res, index) => (
                    <li key={index}>{res}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact */}
            <div className="border-t pt-3 text-sm text-gray-600">
              <p>
                📞 Contact: <span className="font-medium">{hr_name}</span> (
                {hr_email})
              </p>
            </div>
          </>
        )}

        {/* See More / See Less Button */}
        <div className="text-center flex justify-center items-center gap-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            {showDetails ? "See Less" : "See More"}
          </button>
          <div className="card-actions">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary mt-3 ">jobs details </button> </Link>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default JobsCard;
