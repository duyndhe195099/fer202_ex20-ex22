import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BASE } from '../base';

// Khung chung của Ex 21: thanh menu + vùng nội dung.
// Slide 18: <Link> chỉ đổi URL và render lại component tương ứng (SPA, slide 8),
// còn <a href> sẽ gửi GET request và tải lại cả trang.
function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to={BASE}>
          Logo
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to={BASE}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${BASE}/users`}>Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${BASE}/about`}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${BASE}/contact`}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Outlet (slide 12): nơi hiển thị nội dung của route con đang khớp */}
      <main className="container py-3">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
