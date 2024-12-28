import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Footer from './components/footer';
import Home from './components/home';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Common Header */}
        <Header />

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        {/* Common Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
