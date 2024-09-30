import React from "react";
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
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
