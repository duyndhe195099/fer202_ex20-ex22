import React from 'react';
import { Link } from 'react-router-dom';
import { BASE } from '../base';

function NotFound() {
  return (
    <div>
      <h4>404 - Page not found</h4>
      <Link to={BASE}>Về trang chủ Ex 21</Link>
    </div>
  );
}

export default NotFound;
