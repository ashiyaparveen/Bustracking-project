import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Bus Tracking System</h1>
        <p>Your reliable source for real-time bus routes and schedules</p>
      </header>

      <section className="about-info">
        <h2>Our Mission</h2>
        <p>At Bus Tracking System, we aim to make transportation easier and more efficient by providing real-time updates on bus routes and schedules. Whether you are a daily commuter or a tourist, our platform ensures you never miss a bus!</p>
      </section>

      <section className="about-routes">
        <h2>Popular Bus Routes</h2>
        <div className="route-cards">
          <div className="route-card">
            <h3>Route A</h3>
            <p>This route connects the Downtown area to the City Center, with frequent buses and a quick travel time.</p>
            <p><strong>Distance:</strong> 10 miles</p>
            <p><strong>Duration:</strong> 30 minutes</p>
            <img src="/istockphoto-1066484026-612x612.jpg" alt="Route A" />
          </div>
          <div className="route-card">
            <h3>Route B</h3>
            <p>Serving travelers from the Airport to the University, Route B is perfect for students and tourists alike.</p>
            <p><strong>Distance:</strong> 15 miles</p>
            <p><strong>Duration:</strong> 45 minutes</p>
            <img src="download (1).jpeg" alt="Route B" />
          </div>
          <div className="route-card">
            <h3>Route C</h3>
            <p>Route C takes you on a scenic journey from the North Park to the South Mall, ideal for those who enjoy city views.</p>
            <p><strong>Distance:</strong> 12 miles</p>
            <p><strong>Duration:</strong> 40 minutes</p>
            <img src="/download.jpeg" alt="Route C" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
