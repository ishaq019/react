import React, { useState } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import Assignment from './Assignment';
import Register from './Register';
import Login from './Login';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  const check=()=>{
    if (localStorage.getItem("Login") != "yes") {
      alert("Please Login")
      navigate("")
    }
    else if (localStorage.getItem("Login") == "yes") {
      navigate("/About")
    }
  }

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // You can implement search functionality here
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("Login","no")
    navigate('/');
  };

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <nav id='Nav_parent'>
        <Link to='/' className={isActive('/')}>
          Home
        </Link>
        <button id='btn'  onClick={check}  className={isActive('/About')}>
          About
        </button>
        <div className="search-container">
          <input 
            id='srch' 
            placeholder='Search...' 
            type='search'
            value={searchQuery}
            onChange={handleSearch}
            aria-label="Search"
          />
        </div>
        <button 
          className={`nav-button ${isActive('/Contact')}`}
          onClick={() => {
            if (localStorage.getItem("Login") != "yes") {
               alert("Please Login")
               navigate("")
              } else {
                navigate('/Contact')
  } }}
  >
          Contact Us
        </button>
        <button 
          className={`nav-button ${isActive('/Assignment')}`}
          onClick={() => {
            if (localStorage.getItem("Login") != "yes") {
               alert("Please Login")
               navigate("")
              } else {
                navigate('/Assignments')
  } }}
        >
          Assignments
        </button>

        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>
        ) : (
          <div className="auth-links">
            <button 
              className={`nav-button ${isActive('/login')}`}
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <span>/</span>
            <button 
              className={`nav-button ${isActive('/signup')}`}
              onClick={() => navigate('/signup')}
            >
              Signup
            </button>
          </div>
        )}
      </nav>

      <main className="main-content">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Assignment' element={<Assignment />} />
          <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
