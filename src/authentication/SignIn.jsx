import React, { use } from "react";
import { AuthContex } from "../contex/AuthContex";
import loginLottie from "../assets/lotties/login.json"
import Lottie from "lottie-react";

const SignIn = () => {

    const {SingInUser}=use(AuthContex);
       
    
        const handleSignInForm=(e)=>{
            e.preventDefault();
            const form=e.target;
            const email=form.email.value;
            const password=form.password.value;
            console.log(email,password)
            // signin
            SingInUser(email,password)
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
        <div className="hero-content gap-2 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie style={{width:'300px'}} animationData={loginLottie} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-4xl font-bold text-center">SignIn now!</h1>
              <form onSubmit={handleSignInForm}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
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
                  <button className="btn btn-neutral mt-4">SignIn</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
