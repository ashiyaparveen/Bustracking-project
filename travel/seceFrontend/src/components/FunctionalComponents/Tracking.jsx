import React, { useState, useEffect } from "react";

const stops = ["Home", "Kinathukadavu", "OKM", "Sri Eshwar College", "Checkpost", "Destination"];

const BusTracking = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [currentStop, setCurrentStop] = useState(null);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let interval;
    if (isMoving && currentStop !== null && currentStop < stops.indexOf(destination)) {
      interval = setTimeout(() => {
        setCurrentStop((prevStop) => {
          if (prevStop < stops.indexOf(destination)) {
            return prevStop + 1;
          } else {
            setIsMoving(false);
            clearTimeout(interval);
            return prevStop;
          }
        });
      }, 2000);
    }
    return () => clearTimeout(interval);
  }, [isMoving, currentStop, destination]);

  const startJourney = () => {
    if (!pickup || !destination || stops.indexOf(pickup) >= stops.indexOf(destination)) {
      alert("Please select a valid pickup and destination.");
      return;
    }
    setCurrentStop(stops.indexOf(pickup));
    setIsMoving(true);
  };

  const stopBus = () => {
    setIsMoving(false);
  };

  const moveBus = () => {
    if (currentStop !== null && currentStop < stops.indexOf(destination)) {
      setIsMoving(true);
    }
  };

  return (
    <div style={{ 
      textAlign: "center", 
      backgroundColor: "rgb(203, 143, 12)", // Updated Background Color
      height: "100vh", 
      paddingTop: "50px"
    }}>
      <h1 style={{ color: "#fff" }}>Bus Tracking System</h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontSize: "16px", color: "#fff" }}>Pickup Point:</label>
        <select value={pickup} onChange={(e) => setPickup(e.target.value)} style={{ padding: "5px" }}>
          <option value="">Select</option>
          {stops.map((stop, index) => (
            <option key={index} value={stop}>{stop}</option>
          ))}
        </select>

        <label style={{ margin: "0 10px", fontSize: "16px", color: "#fff" }}>Destination:</label>
        <select value={destination} onChange={(e) => setDestination(e.target.value)} style={{ padding: "5px" }}>
          <option value="">Select</option>
          {stops.map((stop, index) => (
            <option key={index} value={stop}>{stop}</option>
          ))}
        </select>
      </div>

      <div
        style={{
          position: "relative",
          width: "80%",
          height: "100px",
          margin: "20px auto",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          overflow: "hidden",
        }}
      >
        {stops.map((stop, index) => (
          <div
            key={index}
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "black",
              background: index === currentStop ? "orange" : "yellow",
              padding: "5px 10px",
              borderRadius: "5px",
              transition: "background 0.5s ease-in-out",
            }}
          >
            {stop}
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            fontSize: "50px",
            transition: "left 2s ease-in-out",
            left: currentStop !== null ? `${(currentStop / (stops.length - 1)) * 100}%` : "0%",
          }}
        >
          🚌
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={startJourney}
          disabled={isMoving}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            margin: "5px",
            cursor: "pointer",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            opacity: isMoving ? "0.5" : "1",
            transition: "0.3s",
          }}
        >
          Start Journey
        </button>
        <button
          onClick={stopBus}
          disabled={!isMoving}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            margin: "5px",
            cursor: "pointer",
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            opacity: !isMoving ? "0.5" : "1",
            transition: "0.3s",
          }}
        >
          Stop
        </button>
        <button
          onClick={moveBus}
          disabled={isMoving || currentStop === stops.indexOf(destination)}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            margin: "5px",
            cursor: "pointer",
            backgroundColor: "green",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            opacity: isMoving || currentStop === stops.indexOf(destination) ? "0.5" : "1",
            transition: "0.3s",
          }}
        >
          Move
        </button>
      </div>

      {currentStop !== null && (
        <h2 style={{ color: "#fff" }}>
          Current Stop:{" "}
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            {stops[currentStop]}
          </span>
        </h2>
      )}
    </div>
  );
};

export default BusTracking;
