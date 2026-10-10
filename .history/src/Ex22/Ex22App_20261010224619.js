import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// "App" của Ex 22 trong đề. Khác đề: không còn <Router> (đã có trong index.js).
const Ex22App = () => {
  return (
    <>
      {/* Menu nằm NGOÀI <Routes> nên hiện ở mọi trang của Ex 22 */}
      <CustomNavbar />

      <Routes>
        {/* SỬA SO VỚI ĐỀ: bỏ "exact" (v6 mặc định khớp chính xác) */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Slide 17 (Optional parameters): route cha "/profile" + 2 route con.
            ":username" khớp /profile/alice ; path="" khớp đúng /profile. Dùng chung Profile. */}
        <Route path="/profile">
          <Route path=":username" element={<Profile />} />
          <Route path="" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Ex22App;
