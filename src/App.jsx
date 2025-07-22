import React from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Home, About, Projects, Contact } from './pages';

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* Show footer only if not on home */}
      {!isHomePage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <AppContent />
      </Router>
    </main>
  );
};

export default App;
