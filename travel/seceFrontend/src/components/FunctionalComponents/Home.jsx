import React from 'react';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Bus Tracking System</h1>
        <p>Stay on track with real-time bus route and schedule updates</p>
      </header>

      <section className="home-intro">
        <h2>Your Journey Starts Here</h2>
        <p>Keep track of bus routes, schedules, and live updates. Plan your trip and never miss a bus!</p>
      </section>

      <section className="home-featured">
        <h2>Featured Routes</h2>
        <div className="home-cards">
          <div className="home-card" style={{ backgroundImage: "url('/route1.jpg')" }}>
            <h3>Route A</h3>
            <p>Connects Downtown to the City Center. Quick and frequent buses.</p>
          </div>
          <div className="home-card" style={{ backgroundImage: "url('/route2.jpg')" }}>
            <h3>Route B</h3>
            <p>From the Airport to the University. Convenient for travelers and students.</p>
          </div>
          <div className="home-card" style={{ backgroundImage: "url('/route3.jpg')" }}>
            <h3>Route C</h3>
            <p>A scenic route from the North Park to the South Mall. Enjoy the views while you ride.</p>
          </div>
        </div>
      </section>

      <section className="home-schedules">
        <h2>Upcoming Schedules</h2>
        <div className="schedule-table">
          <table>
            <thead>
              <tr>
                <th>Route</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Route A</td>
                <td>08:00 AM</td>
                <td>08:45 AM</td>
                <td>On Time</td>
              </tr>
              <tr>
                <td>Route B</td>
                <td>09:30 AM</td>
                <td>10:15 AM</td>
                <td>Delayed</td>
              </tr>
              <tr>
                <td>Route C</td>
                <td>10:45 AM</td>
                <td>11:30 AM</td>
                <td>On Time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Home;
