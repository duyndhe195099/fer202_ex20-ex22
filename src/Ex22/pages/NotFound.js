import React from 'react';
import { Link } from 'react-router-dom';
import { BASE } from '../base';

const NotFound = () => (
  <div align="center">
    404 - Not Found <Link to={BASE}>Về trang chủ Ex 22</Link>
  </div>
);

export default NotFound;
