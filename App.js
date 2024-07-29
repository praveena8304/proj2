import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import pic from './img/logo5.jpg';
import './App.css';
// import './info.json';
 
// import AboutusAPI from './API Reactjs Project/AboutusAPI';
import ContactAPI from './ContactAPI';
import BMIAPI from './BMIAPI';
import HomeAPI from './HomeAPI';
import API from './API';
 
import WeatherAPI from './WeatherAPI.js';
import NewsAPI from './NewsAPI';
import MovieAPI from './MovieAPI';
import ProductsAPI from './ProductsAPI';
import FoodAPI from "./FoodAPI.js"
export default function App() {
  const logout = () => {
    localStorage.removeItem("signUp")
    window.location.reload()
  }
  const deleteAccount = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <BrowserRouter>
      <div className='Container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light" id="nav">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/HomeAPI" id="logo">
              <img src={pic} alt="" width="30px" />
              <span className='app-title'>Store Point</span>
            </Link>
 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/HomeAPI">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/AboutusAPI">
                    About
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/BMIAPI">
                    Check BMI
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactAPI">
                    Contact
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/API"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    APIs
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/WeatherAPI">
                        Weather Report
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/NewsAPI">
                        Latest News
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/FoodAPI">
                        Food Recipe
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/MovieAPI">
                        Movies
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ProductsAPI">
                        Products
                      </Link>
                    </li>
                  </ul>
                </li>
 
                <div>
                </div>
              </ul>
              <button onClick={logout} className="logout">LogOut</button>
              <button onClick={deleteAccount} className="delete">Delete Account</button>
 
            </div>
          </div>
        </nav>
 
        <Routes>
          <Route path="/HomeAPI" element={<HomeAPI />} />
          {/* <Route path="/AboutusAPI" element={<AboutusAPI />} /> */}
          <Route path="/ContactAPI" element={<ContactAPI />} />
          <Route path="/BMIAPI" element={<BMIAPI />} />
          <Route path="/API" element={<API />} />
 
          <Route path="/ProductsAPI" element={<ProductsAPI />} />
          <Route path="/WeatherAPI" element={<WeatherAPI />} />
          <Route path="/NewsAPI" element={<NewsAPI />} />
          <Route path="/MovieAPI" element={<MovieAPI />} />
          <Route path="/FoodAPI" element={<FoodAPI />} />
 
        </Routes>
      </div>
    </BrowserRouter>
  );
}