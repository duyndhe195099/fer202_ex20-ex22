import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { BASE } from '../base';


const Profile = () => {
  const { username } = useParams(); 
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab'); 

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
