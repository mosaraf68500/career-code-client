import React, { use } from "react";
import { AuthContex } from "../contex/AuthContex";

const AddJobs = () => {
    const {user}=use(AuthContex);

    const handleSubmitFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form); 
    const data = Object.fromEntries(formData.entries());
    const {salaryMax,salaryMin,currentcy, ...newJob}=data;
    // process salary range
    newJob.salaryRang={
       Max: salaryMax,Min:salaryMin,Currency:currentcy
    }


    // process requiremant 

    newJob.requirement=newJob.requirement.split(',').map(req=>req.trim());
    // process responsibilitys
    newJob.responsibility=newJob.responsibility.split(',').map(res=>res.trim());
    console.log(newJob);
};

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-4xl text-center font-bold">Please add a job</h1>
      <form onSubmit={handleSubmitFormData}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">basic info</legend>
          <label className="label"> Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="job title"
          />

          <label className="label">Compnay Nane</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="company name"
          />

          <label className="label">compnay location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="company location"
          />

          <label className="label">compnay logo</label>
          <input
            type="text"
            name="logo"
            className="input"
            placeholder="company logo"
          />
        </fieldset>

        {/* job type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">job type</label>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value="On-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybride"
              value="Hybride"
            />
          </div>
        </fieldset>

        {/* job category */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">job category</label>
          <select
            name="job-category"
            defaultValue="job category"
            className="select"
          >
            <option disabled={true}>job category</option>
            <option>Engineer</option>
            <option>developer</option>
            <option>backend</option>
          </select>
        </fieldset>

        {/* application date line */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">application dateline</label>
          <input type="date" className="input" />
        </fieldset>

        {/* job salary range */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">salary range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-4">
            <div>
              <label className="label">Max salary</label>
              <input
                type="text"
                name="salaryMax"
                className="input"
                placeholder="Maximum salary"
              />
            </div>

            <div>
              <label className="label">Min salary</label>
              <input
                type="text"
                name="salaryMin"
                className="input"
                placeholder="Minimum salary"
              />
            </div>

            <div>
              <label className="label">Currentcy</label>
              <select
                name="currentcy"
                defaultValue="currentcy"
                className="select"
              >
                <option disabled={true}>currentcy</option>
                <option>BDT</option>
                <option>US</option>
                <option>UE</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* description */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">description</label>
          <textarea
            className="textarea"
            name="description"
            placeholder="Bio"
          ></textarea>
        </fieldset>

        {/* job requrement */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          \<label className="label">requirement</label>
          <textarea
            className="textarea"
            name="requirement"
            placeholder="requirement separet by a comma"
          ></textarea>{" "}
        </fieldset>

        {/* job responsibility */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">responsibility</label>
          <textarea
            className="textarea"
            name="responsibility"
            placeholder="responsibility separet by a comma"
          ></textarea>{" "}
        </fieldset>

        {/* job type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
         

          <label className="label">hr_email</label>
          <input type="email" className="input" defaultValue={user.email} placeholder="hr_email" />
          <label className="label">hr_name</label>
          <input type="text" className="input"  placeholder="hr_name" />
        </fieldset>
        <input type="submit" className="btn btn-accent" value="add a job" />
      </form>
    </div>
  );
};

export default AddJobs;
