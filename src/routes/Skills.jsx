import React from "react";
 // Your custom styles

export default function Skills() {
  return (
    <section
      id="skills" className=" min-h-screen py-16">



      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        {/* Skills Section */}
        <div className="flex flex-col items-center gap-8">
          {/* Skill 1 - HTML5 */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-html5 text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-blue-800">HTML5</span>
              </div>
              <span className="text-lg font-medium text-blue-800">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-yellow-500 h-2.5 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>

          {/* Skill 2 - CSS3 */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-css3 text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-blue-800">CSS3</span>
              </div>
              <span className="text-lg font-medium text-blue-800">85%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          {/* Skill 3 - JavaScript */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-javascript text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-blue-800">
                  JavaScript
                </span>
              </div>
              <span className="text-lg font-medium text-blue-800">70%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-yellow-400 h-2.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          {/* Skill 4 - React */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-react text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-blue-800">React</span>
              </div>
              <span className="text-lg font-medium text-blue-800">80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-teal-500 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          {/* Skill 5 - Python */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="bx bxl-python text-3xl mr-3"></i>
                <span className="text-xl font-semibold text-blue-800">Python</span>
              </div>
              <span className="text-lg font-medium text-blue-800">75%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* Skill 6 - Tailwind CSS */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
              <i className="bx bxl-tailwind-css text-3xl mr-3"></i>


                <span className="text-xl font-semibold text-blue-800">Tailwind </span>

            
 
              </div>
              <span className="text-lg font-medium text-blue-800">75%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-orange-500 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
}
