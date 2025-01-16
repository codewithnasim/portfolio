import React from "react";
import pr from "../assets/nasim.jpg";
import SocialMedia from "../component/SocialMedia";

const About = () => {
  return (
    <section className="about section bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="container mx-auto flex flex-col items-center text-center lg:flex-row lg:text-left">
        <div className="lg:w-1/2">
          <img
            className="rounded-full drop-shadow-5xl max-w-xs mx-auto lg:max-w-md lg:mx-0"
            src={pr}
            alt="Nasim Islam"
          />
        </div>

        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-4">
            I'm <span className="text-indigo-600">Nasim Islam</span>
          </h2>
          <h3 className="mt-4 text-xl text-gray-700 font-semibold animate-pulse">
            Full Stack Web Developer
          </h3>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            I am Nasim Islam, a passionate web developer with a strong background in computer
            science. I have completed my Bachelor of Computer Application (BCA) and am currently
            pursuing my Master's in Computer Applications (MCA). I specialize in{" "}
            <span className="text-blue-600">React, HTML, CSS, Django, and Python</span>.
            I also completed a 6-month internship in Django at Ardent Computech, where I gained
            hands-on experience in building web applications.
          </p>

          <div className="mt-8">
            <h4 className="text-lg text-gray-800 font-semibold">Visit My Social Media:</h4>
            <div className="mt-2 flex justify-center gap-4">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
