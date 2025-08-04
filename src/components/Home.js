import React from 'react';
import pic from './assets/17289.png'
import CV from './assets/cv_en.4ecd77791ba4753c2a61.pdf'

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <div className="home-content">
          <h2 className="home-subtitle">Hi, I'm a Web Developer</h2>
          <h1 className="home-title">Hamza Béji</h1>
          <p className="home-description">
            I'm a passionate and highly motivated front-end developer with a keen eye for detail and a love for creating beautiful and user-friendly web experiences. I specialize in building responsive and interactive websites using modern web technologies.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href={CV} download className="btn btn-secondary">Download CV</a>
          </div>
        </div>
        <div className="home-image-container">
          <img src={pic} alt="Hamza Béji" className="home-image" />
        </div>
      </div>
      
    </section>
  );
};

export default Home;