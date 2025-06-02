import React from "react";
import registerLotties from "../assets/lotties/registerLottie.json";
import Lottie from "lottie-react";

const Registetion = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-18 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerLotties} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Registetion now!</h1>
              <form>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input name="email" type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                  name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registetion;
