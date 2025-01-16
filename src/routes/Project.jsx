import React from "react";
import { Link } from "react-router-dom"; // Import Link once
import im from "../assets/textutils.png";
import newsphoto from "../assets/news.png";
import pass from "../assets/password.jpeg";
import currency from "../assets/currency.webp";
import tictac from "../assets/tictactoe.avif";

const Project = () => {
  return (
    <>
      <section className="py-12" id="work">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-black-800 mb-4">
            Projects
          </h2>
          <p className="text-lg text-blue-600 text-center mb-10">
            Here are some of the projects I’ve built using HTML, CSS, JavaScript, and React.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <Link to="/textutils" className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img className="w-full h-48 object-cover rounded-t-lg" src={im} alt="TextUtils Project" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">TextUtils</h3>
                <p className="text-sm text-gray-600">
                  A text utility app where you can transform text to uppercase, lowercase, remove extra spaces, count words and characters, and copy text.
                </p>
              </div>
            </Link>

            <Link to="/newsdekho" className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img className="w-full h-48 object-cover rounded-t-lg" src={newsphoto} alt="News App Project" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">News App</h3>
                <p className="text-sm text-gray-600">
                  A news app where you can read daily news. Currently works only on localhost as the API is not free for server deployment.
                </p>
              </div>
            </Link>

            <Link to="/passgenerator" className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img className="w-full h-48 object-cover rounded-t-lg" src={pass} alt="Password Generator Project" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Password Generator</h3>
                <p className="text-sm text-gray-600">
                  Generate secure passwords based on your preferences, including numbers, special characters, or a mix of both.
                </p>
              </div>
            </Link>

            <Link to="/currencyconverter" className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img className="w-full h-48 object-cover rounded-t-lg" src={currency} alt="Currency Converter Project" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Currency Converter</h3>
                <p className="text-sm text-gray-600">
                  Compare the value of your currency to other currencies worldwide with this app.
                </p>
              </div>
            </Link>

            <Link to="/tictactoe" className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img className="w-full h-48 object-cover rounded-t-lg" src={tictac} alt="TicTacToe Game Project" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">TicTacToe Game</h3>
                <p className="text-sm text-gray-600">
                  Play a simple single-player TicTacToe game. Choose a box and enjoy the classic game.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
