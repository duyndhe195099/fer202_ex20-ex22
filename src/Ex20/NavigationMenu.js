import React from 'react';
import { Link } from 'react-router-dom';
import { BASE } from './base';

// Đề dùng <NavigationMenu /> nhưng không cung cấp code -> tự viết.
// Slide 18: dùng <Link to="..."> thay cho <a href>, để đổi trang mà không tải lại.
const NavigationMenu = () => {
  return (
    <nav className="ex20-nav">
      <Link to={BASE}>Home</Link>
      <Link to={`${BASE}/products`}>Products</Link>
      <Link to={`${BASE}/about`}>About</Link>
      <Link to={`${BASE}/contact`}>Contact</Link>
      {/* 3 link bên dưới để thử route "/users/:userId?" */}
      <Link to={`${BASE}/users`}>Users (no id)</Link>
      <Link to={`${BASE}/users/1`}>User 1</Link>
      <Link to={`${BASE}/users/42`}>User 42</Link>
    </nav>
  );
};

export default NavigationMenu;
