import React from "react";
<<<<<<< HEAD
import { FiDownload } from "react-icons/fi";
import cv from "../assets/resume.pdf";
// import jsPDF from "jspdf";

import "../css/style.css";
import bgImage from "../assets/bg.jpg";
import prImage from "../assets/nas.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative w-full ">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-6xl tracking-tight md:text-6xl lg:text-6xl font-semibold font-serif">
              Hi,
              <br />I am <h1 className="text-blue-600 inline-block">Nasim</h1>
            </h1>
            <p className="mt-8  text-5xl text-rose-900 animate-bounce ">
              Full Stack Web Developer
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <Link to={cv}>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Download CV
                  </button>
                </Link>
              </div>
              <div>
                <Link to={"/contact"}>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Contact
                  </button>
                </Link>
              </div>
              <div>
                <Link to={"/project"}>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Project
                  </button>
                </Link>
              </div>
            </form>
            <p className="mt-20"></p>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className=" object-cover  p-3 rounded-3xl mt-10 h-3/5"
              src={prImage}
              alt=""
=======
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
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Download CV
              </button>
              <Link to="/contact">
                <button
                  type="button"
                  className="rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Contact
                </button>
              </Link>
              <Link to="/project">
                <button
                  type="button"
                  className="rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Projects
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
>>>>>>> 4e0713b (Initial commit)
            />
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
};
=======

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

>>>>>>> 4e0713b (Initial commit)
export default Home;
