import React, { use } from "react";
import AuthHook from "../Hooks/AuthHook";
import { AuthContex } from "../contex/AuthContex";
import { useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyNow = () => {
  const { user } = use(AuthContex);
  const { id: jobId } = useParams();
  // console.log(jobId,user)

  const handleApplyNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);
    const aplication = {
      jobId,
      aplicant: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:3000/applications", aplication)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Job Apply Now
      </h1>
      <form onSubmit={handleApplyNow}>
        <fieldset className="bg-base-200 border border-base-300 rounded-box w-80 p-6 shadow-md">
          <label className="label">Linkedin</label>
          <input
            type="url"
            name="linkedin"
            className="input input-bordered w-full mb-4"
            placeholder="Linkedin Profile"
          />

          <label className="label">GitHub</label>
          <input
            name="github"
            type="url"
            className="input input-bordered w-full mb-4"
            placeholder="GitHub Profile"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input input-bordered w-full"
            placeholder="Resume"
          />
          <div className="text-center py-3">
            <button className="btn btn-accent text-white">submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ApplyNow;
