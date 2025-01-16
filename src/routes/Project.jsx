import React from "react";
<<<<<<< HEAD
import im from "../assets/textutils.png";
import newsphoto from "../assets/news.png";
import { Link } from "react-router-dom";
=======
import { Link } from "react-router-dom";
import im from "../assets/textutils.png";
import newsphoto from "../assets/news.png";
>>>>>>> 4e0713b (Initial commit)
import pass from "../assets/password.jpeg";
import currency from "../assets/currency.webp";
import tictac from "../assets/tictactoe.avif";

const Project = () => {
  return (
<<<<<<< HEAD
    <>
      <section className="work section" id="work">
        <h2 className="section-title">Project</h2>
        <p className="p-4 text-center">
          Here some project that is made by HTML,CSS, Java Script and React .
        </p>

        <div className="work__container bd-gride">
          <Link to="/textutils" relative="path" className="work__img">
            <img src={im} alt="" />
            <p className="p-3 ">
              This is text utilization project. Here you can change your text to
              uppercase and lowercase as per your need. you can also remove
              extra space, and copy text etc. you can also check how much word
              and alphabet in your text.
            </p>
          </Link>
          <Link to="/newsdekho" relative="path" className="work__img">
            <img src={newsphoto} alt="" />
            <p className="p-3 ">
              It is a news app. here you can read everyday news. But this app
              only work in localhost . Its not working in the server . Becouse
              api is not free for server. Thats why its not working in another
              server.
            </p>
          </Link>
          <Link to="/passgenerator" relative="path" className="work__img">
            <img src={pass} alt="" />
            <p className="p-3 ">
              It is a Password generator app. Here you can generate password as
              per your need. Password can be character or with some number or
              with some special character and both.
            </p>
          </Link>

          <Link to="/cureencyconverter" relative="path" className="work__img">
            <img src={currency} alt="" />
            <p className="p-3">
              This is a currency conerter app. You can compare the price of your
              currency to any others country currency.
            </p>
          </Link>
          <Link to="/tictactoe" relative="path" className="work__img">
            <img src={tictac} alt="" />
            <p className="p-3">
              This is a TicTacToe game . Here you can play game . But this game
              only one player can play and select the boxes.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};
=======
    <section className=" py-12" id="work">
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

          <Link to="/cureencyconverter" className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
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
  );
};

>>>>>>> 4e0713b (Initial commit)
export default Project;
