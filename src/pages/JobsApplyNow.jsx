import React from "react";
import { useLoaderData } from "react-router";

const JobsApplyNow = () => {
  const job = useLoaderData();
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
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6 my-8">
      <div className="flex items-center gap-4">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Job Type:</span> {jobType}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Salary Range:</span>{" "}
            {salaryRange?.currency} {salaryRange?.min} - {salaryRange?.max}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Application Deadline:</span>{" "}
            {applicationDeadline}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {status}
          </p>
          <p>
            <span className="font-semibold">HR Name:</span> {hr_name}
          </p>
          <p>
            <span className="font-semibold">HR Email:</span> {hr_email}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-4">Job Description</h3>
        <p className="text-gray-700">{description}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-4">Requirements</h3>
        <ul className="list-disc list-inside text-gray-700">
          {requirements?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-4">Responsibilities</h3>
        <ul className="list-disc list-inside text-gray-700">
          {responsibilities?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="text-sm text-gray-400 text-right">Job ID: {_id}</div>
    </div>
  );
};

export default JobsApplyNow;
