import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import Footer from './components/Footer';

const AppRoutes = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {!isHomePage && <Footer />}
    </>
  );
};

export default AppRoutes;
