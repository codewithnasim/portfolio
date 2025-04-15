import React from "react";
import pr from "../assets/nasim.jpg";

const About = () => {
  return (
    <section
      className="about section bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* About Heading */}
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>

        {/* Profile Image */}
        <div className="mt-8 flex justify-center">
          <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
            <img
              className="rounded-full w-40 h-40 object-cover border-4 border-white"
              src={pr}
              alt="Nasim Islam"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 text-lg text-gray-600 max-w-3xl mx-auto">
          <p>
            I am Nasim Islam, a passionate web developer with a strong
            background in computer science. I have completed my Bachelor of
            Computer Application (BCA) and am currently pursuing my Master's in
            Computer Applications (MCA). I specialize in{" "}
            <span className="text-blue-600">
              React, HTML, CSS, Django, and Python
            </span>
            . I also completed a 6-month internship in Django at Ardent
            Computech, where I gained hands-on experience in building web
            applications.
          </p>
          <p className="mt-4">
            I specialize in React.js for frontend development and Django for
            backend solutions, creating seamless, user-friendly experiences that
            drive engagement and conversion. I'm passionate about clean code,
            performance optimization, and staying on top of emerging
            technologies.
          </p>
        </div>

        {/* Stats */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">5+</div>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">50+</div>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">30+</div>
            <p className="mt-2 text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">15+</div>
            <p className="mt-2 text-gray-600">Awards</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
