import React from 'react';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'C++', level: 80 },
  { name: 'C', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'HTML5 & CSS3', level: 95 },
  { name: 'ReactJS', level: 65 },
  { name: 'MySQL', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'Algorithms', level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">Here are some of the technologies and tools I've worked with throughout my academic and personal projects.</p>
        <div className="grid-3">
          <div className="card skills-summary-card">
            <h3>+5</h3>
            <p>Programming Languages</p>
          </div>
          <div className="card skills-summary-card">
            <h3>10+</h3>
            <p>Academic Projects</p>
          </div>
          <div className="card skills-summary-card">
            <h3>3</h3>
            <p>Years of Study</p>
          </div>
        </div>
        <div className="skills-list grid-2">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;