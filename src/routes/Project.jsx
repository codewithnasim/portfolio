import React, { useState } from "react";
import { Link } from "react-router-dom";
import im from "../assets/textutils.png";
import newsphoto from "../assets/news.png";
import pass from "../assets/password.jpeg";
import currency from "../assets/currency.webp";
import tictac from "../assets/tictactoe.avif";
import sarathi from "../assets/sarathi.jpg";
import { Description } from "@headlessui/react";
import homeEase from "../assets/homeEase.png";

const allProjects = [
  {
    id: 1,
    title: "TextUtils",
    tech: "React, JavaScript, Tailwind",
    category: "web",
    Description:
      "TextUtils is a web application that allows users to manipulate and analyze text. It offers features like text conversion, word count, and character count.",
    image: im,
    link: "/textify",
  },
  {
    id: 2,
    title: "News App",
    tech: "React, News API, Tailwind",
    category: "web",
    Description:
      "News App is a web application that fetches and displays the latest news articles from various sources. It allows users to filter news by categories.",
    image: newsphoto,
    link: "/factnest",
  },
  {
    id: 3,
    title: "Password Generator",
    tech: "React, Tailwind",
    category: "web",
    image: pass,
    Description:
      "Password Generator is a web application that generates secure passwords based on user-defined criteria. It allows users to customize password length and complexity.",
    link: "/passgenerator",
  },
  {
    id: 4,
    title: "Currency Converter",
    tech: "React, ExchangeRate API",
    category: "web",
    image: currency,
    Description:
      "Currency Converter is a web application that allows users to convert currencies in real-time. It fetches exchange rates from an external API.",
    link: "/currencyconverter",
  },
  {
    id: 5,
    title: "TicTacToe Game",
    tech: "React, JavaScript",
    category: "web",
    image: tictac,
    Description:
      "TicTacToe is a classic game built with React. It allows users to play against the computer or a friend. The game keeps track of scores and offers a reset option.",
    link: "/tictactoe",
  },
  {
    id: 6,
    title: "Sarathi",
    tech: "React-Native",
    category: "mobile",
    image: sarathi,
    Description:
      "Sarathi is a full-stack driver request application that allows users to request drivers based on their current location using Map APIs. Both users and drivers can log in securely, manage their profiles, and track requests in real-time. The app ensures smooth interaction with a responsive UI and efficient backend support.",
    link: "https://github.com/codewithnasim/sarathi",
  },
  {
    id: 7,
    title: "HomeEase",
    tech: "django, SQLite",
    category: "web",
    image: homeEase,
    Description:
      "HomeEase is a digital marketplace that connects users with service providers for home maintenance and wellness tasks. Built with Python, Django, and SQLite, the platform features a user-friendly interface, secure authentication, and real-time service booking with status updates. It enables seamless, scalable interactions between users and professionals.",
    link: "https://github.com/codewithnasim/TMS-using-Django",
  },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeTab);

  return (
    <div id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex justify-center space-x-4">
          {["all", "web", "mobile", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="h-40 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-red-700 underline">
                  {project.tech}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {project.Description}
                </p>
                <div className="mt-3">
                  <Link to={project.link}>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Project →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link to="/projects">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
