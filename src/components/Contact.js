import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container contact-section">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I'm currently seeking new opportunities and challenges. Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <FaEnvelope />
              </div>
              <div className="contact-detail-text">
                <h4>Email</h4>
                <p>hamzabeji001@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <FaPhone />
              </div>
              <div className="contact-detail-text">
                <h4>Phone</h4>
                <p>+216 29 647 250</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-detail-text">
                <h4>Location</h4>
                <p>Ghannouch, Gabès, Tunisia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h3>Send a Message</h3>
          <form className="contact-form" action="https://formsubmit.co/hamzabeji001@gmail.com" method='POST'>
            <div className="form-group name-row">
              <div className="form-group">
                <label htmlFor="firstName" >First Name</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;