import React from 'react';
import { Link } from 'react-router-dom';
import dishes from '../data/dishes';
import { BASE } from '../base';

// Bài 2 - Danh sách món ăn. Bấm vào TÊN món -> sang /ex21/dishes/<id>
function Home() {
  return (
    <div className="mx-auto" style={{ maxWidth: 700 }}>
      <h5 className="text-center">Home</h5>

      <div className="row row-cols-2 g-2">
        {dishes.map((dish) => (
          <div className="col" key={dish.id}>
            <div className="card h-100">
              {/* PUBLIC_URL + đường dẫn tuyệt đối: nếu viết "images/x.png" (tương đối)
                  thì ở trang /ex21/dishes/1 trình duyệt sẽ tìm sai chỗ -> ảnh vỡ */}
              <img
                src={`${process.env.PUBLIC_URL}/${dish.image}`}
                alt={dish.name}
                className="card-img-top"
              />
              <div className="card-body">
                <Link to={`${BASE}/dishes/${dish.id}`}>{dish.name}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
