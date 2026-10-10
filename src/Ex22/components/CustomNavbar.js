import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BASE } from '../base';

// Thanh menu theo ảnh trong đề: "Logo" bên trái, Home / About / Contact bên phải.
// Slide 18: tag={Link} bảo reactstrap vẽ NavbarBrand / NavLink bằng <Link> của React Router
// thay vì <a>, nên bấm vào chỉ đổi URL + nội dung, không tải lại trang.
const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md" className="px-3">
      <NavbarBrand tag={Link} to={BASE}>
        Logo
      </NavbarBrand>

      {/* SỬA SO VỚI ĐỀ: "mr-auto" (Bootstrap 4) -> "ms-auto" (Bootstrap 5);
          bỏ prop "exact" (v6 không có, reactstrap sẽ đẩy xuống thẻ <a> và React báo cảnh báo) */}
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to={BASE}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={`${BASE}/about`}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={`${BASE}/contact`}>
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
