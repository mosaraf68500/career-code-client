import React, { use } from "react";

const MyJobList = ({ MyPostedJObsPromise }) => {
  const jobs = use(MyPostedJObsPromise);

  return (
    <div>
      <h1>My posted jobs: {jobs.length}</h1>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job Deadline</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(( job ,index ) => (
              <tr key={job._id}>
                <th>{ index+ 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobList;
