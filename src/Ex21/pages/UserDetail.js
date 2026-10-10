import React from 'react';
import { Link, useParams } from 'react-router-dom';
import users from '../data/users';
import { BASE } from '../base';

// Bài 1 - Chi tiết user. Route khai báo: "users/:id"
// Ví dụ: /ex21/users/2  -> hiện "John Smith : 30"
function UserDetail() {
  const { id } = useParams(); // id là chuỗi, vd '2'
  const user = users[Number(id)];

  if (!user) {
    return (
      <div>
        <h4>Không tìm thấy user có id = {id}</h4>
        <Link to={`${BASE}/users`}>Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="fw-normal">
        {user.firstName} {user.lastName} : {user.age}
      </h1>
      <Link to={`${BASE}/users`}>Back to Users</Link>
    </div>
  );
}

export default UserDetail;
