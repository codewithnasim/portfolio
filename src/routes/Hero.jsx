import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import prImage from "../assets/nasim.jpg"; // Default image
import cv from "../assets/resume.pdf";

const handleDownload = (e) => {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = cv;
  link.download = "Nasim_Islam_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HomeSection = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center lg:items-start lg:text-left w-full lg:w-1/2 py-8">
          <div className="inline-flex items-center mb-4 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700">
            <span className="mr-2 text-blue-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </span>
            Full-Stack Developer
          </div>

          <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Hi there, I'm <span className="text-blue-600">Nasim Islam</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl">
            A passionate web developer specializing in creating responsive,
            user-centered experiences that combine elegant design with powerful
            functionality.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              <FiDownload className="w-4 h-4 mr-2" />
              Download CV
            </button>

            <Link to="/contact">
              <button
                type="button"
                className="flex items-center rounded-lg border-2 border-gray-800 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-300 transition duration-300"
              >
                <FiMail className="w-4 h-4 mr-2" />
                Contact Me
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-sm text-gray-500">Find me on:</span>
            <div className="flex space-x-4">
              <a
                href="https://github.com/codewithnasim"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nasim-islam70/"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nasim_islam7/"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/nasim.islam70/"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 max-w-md mx-auto flex justify-center items-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10"></div>
            <div className="absolute inset-0 bg-white/50 rounded-2xl backdrop-blur-sm"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              {prImage ? (
                <img
                  src={prImage}
                  alt="Nasim Islam - Web Developer"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              ) : (
                <div className="relative w-full pb-[125%]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center">
                    <div className="p-8 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-600/10 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                        </svg>
                      </div>
                      <div className="text-blue-600 font-medium">
                        Professional Web Developer
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
