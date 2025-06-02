import React from "react";
import { motion } from "motion/react";
import image1 from "../assets/images/team-working-together-project.jpg";
import image2 from "../assets/images/colleagues-learning-together-group-study.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center border">
          <div className="flex-1 pb-10">
            <motion.img
              src={image1}
              animate={{ y: [120, 180, 120] }}
              transition={{ duration: 10, repeat: Infinity }}
              className=" max-w-sm  rounded-t-4xl rounded-r-4xl border-s-8 border-blue-700 border-b-8 shadow-2xl "
            />

             <motion.img
              src={image2}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay:10, repeat: Infinity }}
              className=" max-w-sm  rounded-t-4xl rounded-r-4xl border-s-8 border-blue-700 border-b-8 shadow-2xl "
            />
          </div>
          <div className="flex-1">
            <motion.h1 className="text-5xl font-bold">
              Box{" "}
              <motion.span
                animate={{
                  color: ["#2ff3e0", "#f8d210", "#fa26a0", "#f51720"],
                  scale: 2,
                  transition: { duration: 4, repeat: Infinity, scale: 2 },
                }}
              >
                Office
              </motion.span>{" "}
              News!
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
