import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks to build
            modern web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-12 space-y-12">
          {/* Frontend Development */}
          <SkillGroup
            title="Frontend Development"
            skills={[
              { icon: "devicon-html5-plain colored", label: "HTML5" },
              { icon: "devicon-css3-plain colored", label: "CSS3" },
              { icon: "devicon-javascript-plain colored", label: "JavaScript" },
              { icon: "devicon-react-original colored", label: "React.js" },
              {
                icon: "devicon-tailwindcss-original-wordmark colored",
                label: "Tailwind CSS",
              },
              { icon: "devicon-bootstrap-plain colored", label: "Bootstrap" },
            ]}
          />

          {/* Backend Development & Database */}
          <SkillGroup
            title="Backend Development & Database"
            skills={[
              { icon: "devicon-nodejs-plain colored", label: "Node.js" },
              { icon: "devicon-express-original colored", label: "Express.js" },
              { icon: "devicon-python-plain colored", label: "Python" },
              { icon: "devicon-django-plain colored", label: "Django" },
              { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
              { icon: "devicon-sqlite-plain colored", label: "SQLite" },
            ]}
          />

          {/* Tools & Platforms */}
          <SkillGroup
            title="Tools & Platforms"
            skills={[
              { icon: "devicon-git-plain colored", label: "Git" },
              { icon: "devicon-github-original colored", label: "GitHub" },
              { icon: "devicon-vscode-plain colored", label: "VS Code" },
              { icon: "devicon-linux-plain colored", label: "Linux" },
              {
                icon: "devicon-amazonwebservices-original colored",
                label: "AWS",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// Skill Group Component
function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-left">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </div>
  );
}

// Reusable Card Component
function SkillCard({ icon, label }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-32 flex flex-col items-center transition duration-300 hover:shadow-lg hover:scale-105">
      <i className={`${icon} text-3xl mb-4`}></i>
      <p className="font-semibold text-center">{label}</p>
    </div>
  );
}
