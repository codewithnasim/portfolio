import React from "react";
import { Link } from "react-router-dom";
import cv from "../assets/resume.pdf";
import prImage from "../assets/codin.jpg";
const Home = () => {
  const handleDownload = (e) => {
    e.preventDefault(); // Prevent page reload
    const link = document.createElement("a");
    link.href = cv; // Use the imported file
    link.download = "Resume.pdf"; // Desired filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center py-12 lg:col-span-7 lg:px-6 xl:col-span-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black-800 leading-tight">
              Hi,
              <br />
              I am <span className="text-blue-600">Nasim Islam</span>
            </h1>
            <p className="mt-4 text-2xl text-black-600">
              A Passionate <span className="text-rose-600 font-semibold">Web Developer</span> Who Crafts Seamless Digital Experiences.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleDownload}
                className="animate-bounce  rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-700"
              >
                Download CV
              </button>
              <Link to="/contact">
                <button
                  type="button"
                  className="rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Contact Me
                </button>
              </Link>
              
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-10 lg:mt-6 lg:col-span-5 xl:col-span-6">
            <img
              className="rounded-3xl object-cover w-full h-auto shadow-lg"
              src={prImage}
              alt="Coding"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            My Skills
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Here are some of the technologies I work with:
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-blue-600 font-semibold">HTML & CSS</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-blue-600 font-semibold">JavaScript</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-blue-600 font-semibold">React.js</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-blue-600 font-semibold">Tailwind CSS</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-blue-600 font-semibold">Python</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-blue-600 font-semibold">Django</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-blue-600 font-semibold">Git & GitHub</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-blue-600 font-semibold">SQL</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
