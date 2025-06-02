import React, { use } from "react";
import registerLotties from "../assets/lotties/registerLottie.json";
import Lottie from "lottie-react";
import { AuthContex } from "../contex/AuthContex";
import SocialLogin from "../shaared/SocialLogin";

const Registetion = () => {
    const {createUser}=use(AuthContex);
   

    const handeRegistetionForm=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        // create use with email and password
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie style={{width:'300px'}} animationData={registerLotties} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-4xl font-bold">Registetion now!</h1>

              <SocialLogin></SocialLogin>
              <form onSubmit={handeRegistetionForm}>
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
                  <button className="btn btn-neutral mt-4">Register</button>
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
