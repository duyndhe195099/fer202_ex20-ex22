import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { BASE } from '../base';

// Profile của đề chỉ hiện "Profile Component". Phần bên dưới là PHẦN THÊM để minh họa
// đúng tiêu đề bài "Optional parameters" (slide 17):
//   /ex22/profile                    -> không có giá trị nào
//   /ex22/profile/alice              -> tham số trên đường dẫn
//   /ex22/profile/alice?tab=posts    -> thêm query parameter
const Profile = () => {
  const { username } = useParams(); // không có thì là undefined
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab'); // không có thì là null

  return (
    <div align="center">
      Profile Component
      {username && <p className="mb-0">Username: {username}</p>}
      {tab && <p className="mb-0">Tab: {tab}</p>}

      <hr className="w-50" />
      <p className="mb-1">Thử tham số tùy chọn:</p>
      <ul className="list-unstyled">
        <li><Link to={`${BASE}/profile`}>{BASE}/profile</Link></li>
        <li><Link to={`${BASE}/profile/alice`}>{BASE}/profile/alice</Link></li>
        <li><Link to={`${BASE}/profile/alice?tab=posts`}>{BASE}/profile/alice?tab=posts</Link></li>
      </ul>
    </div>
  );
};

export default Profile;
