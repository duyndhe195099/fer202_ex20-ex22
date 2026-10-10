import React from 'react';
import { Link } from 'react-router-dom';
import users from '../data/users';
import { BASE } from '../base';

// Bài 1 - Danh sách user. Bấm vào tên -> sang /ex21/users/<id>
function Users() {
  return (
    <div>
      <h2>Users</h2>
      <ul className="list-unstyled fs-2">
        {users.map((user, index) => (
          // index chính là id: John Done = 0, Mary Thompson = 1, John Smith = 2 ...
          <li key={index}>
            <Link to={`${BASE}/users/${index}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
