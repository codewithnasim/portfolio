import React from "react";
<<<<<<< HEAD
import "../css/style.css";
export default function () {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section-title text-3xl font-bold">
          {" "}
          Profesional Skills
        </h2>

        <div className="skills__container bd-grid ">
          <div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML5</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">95%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS3</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JAVASCRIPT</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">65%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-graphic skills__icon"></i>
                <span className="skills__name">Graphic Design</span>
              </div>
              <div className="skills__bar skills__graphic"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-react skills__icon"></i>
                <span className="skills__name">REACT</span>
              </div>
              <div className="skills__bar skills__react"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-python skills__icon"></i>
                <span className="skills__name">PYTHON</span>
              </div>
              <div className="skills__bar skills__python"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-tailwind skills__icon"></i>
                <span className="skills__name">TAILWIND_CSS</span>
              </div>
              <div className="skills__bar skills__tailwind"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>
          </div>

          <div>
            <img src="assets/img/work3.jpg" alt="" className="skills__img" />
          </div>
        </div>
      </section>
    </>
=======

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen py-16 text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        {/* Skills Section */}
        <div className="flex flex-col items-center gap-8">
          {/* Skill 1 */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-html5 text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-gray-300">
                  HTML5
                </span>
              </div>
              <span className="text-lg font-medium text-gray-300">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-yellow-500 h-2.5 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-css3 text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-gray-300">
                  CSS3
                </span>
              </div>
              <span className="text-lg font-medium text-gray-300">85%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-javascript text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-gray-300">
                  JavaScript
                </span>
              </div>
              <span className="text-lg font-medium text-gray-300">70%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-yellow-400 h-2.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-react text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-gray-300">
                  React
                </span>
              </div>
              <span className="text-lg font-medium text-gray-300">80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-teal-500 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          {/* Skill 5 */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-python text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-gray-300">
                  Python
                </span>
              </div>
              <span className="text-lg font-medium text-gray-300">75%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> 4e0713b (Initial commit)
  );
}
