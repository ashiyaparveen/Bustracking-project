import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/FunctionalComponents/Signup';
import Login from './components/FunctionalComponents/Login';

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />} {/* Render Navbar only if logged in */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Login onLogin={handleLogin} />} />
        <Route path="/gallery" element={isLoggedIn ? <Gallery page="Gallery" image="SECE Logo" /> : <Login onLogin={handleLogin} />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Login onLogin={handleLogin} />} />


        <Route path="/signup" element={isLoggedIn ? <Home /> : <Signup />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
