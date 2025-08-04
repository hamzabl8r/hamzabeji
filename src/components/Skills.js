import React from "react";

import skillsData from "./SkillsData";

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skill-container">
        {skillsData.map((categoryData, categoryIndex) => (
          <div key={categoryIndex} className="skills-card">
            <h3 className="category-title">{categoryData.category}</h3>
            <div className="skills-grid">
              {categoryData.skills.map((skill, skillIndex) => (
                <div className="skill-item-circle" key={skillIndex}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
