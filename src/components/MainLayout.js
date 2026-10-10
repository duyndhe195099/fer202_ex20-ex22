import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Thanh chọn bài tập (trên cùng) + <Outlet /> (slide 12) là chỗ hiện bài đang chọn.
// NavLink giống Link nhưng biết link nào đang "active" -> tô sáng bài hiện tại.
// (isActive vẫn đúng khi đang ở trang con, vd /ex21/users/2 thì "Ex 21" vẫn sáng.)
const items = [
  { to: '/ex20', label: 'Ex 20 - Decoupling Route' },
  { to: '/ex21', label: 'Ex 21 - Resource ID' },
  { to: '/ex22', label: 'Ex 22 - Optional params & Link' },
];

function MainLayout() {
  return (
    <>
      <div className="bg-light border-bottom px-3 py-2 d-flex align-items-center gap-3 flex-wrap">
        <strong>React Router</strong>
        <ul className="nav nav-pills">
          {items.map((item) => (
            <li className="nav-item" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `nav-link py-1 ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default MainLayout;
