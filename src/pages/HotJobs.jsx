import React, { use } from "react";
import JobsCard from "../shaared/JobsCard";

const HotJobs = ({ jobsPromises }) => {
  const jobs = use(jobsPromises);

  return (
    <div>
      <div className="flex flex-col justify-between w-1/2 mx-auto text-center py-6">
        <h1 className="text-4xl font-bold space-y-2">Jobs of the day</h1>
        <p className="text-md font-semibold">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {jobs.map((job) => (
          <JobsCard job={job} key={job._id}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
