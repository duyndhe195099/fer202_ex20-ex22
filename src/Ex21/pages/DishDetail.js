import React from 'react';
import { Link, useParams } from 'react-router-dom';
import dishes from '../data/dishes';
import { BASE } from '../base';

// Bài 2 - Chi tiết một món. Route khai báo: "dishes/:id"
function DishDetail() {
  // useParams trả về object chứa các biến URL: { id: '2' }
  // LƯU Ý: giá trị lấy từ URL luôn là CHUỖI, còn dish.id là SỐ -> phải đổi bằng Number()
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === Number(id));

  if (!dish) {
    return (
      <div>
        <h4>Không tìm thấy món ăn có id = {id}</h4>
        <Link to={BASE}>Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto" style={{ maxWidth: 500 }}>
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/${dish.image}`}
          alt={dish.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">
            {dish.name}{' '}
            {dish.label && <span className="badge bg-danger">{dish.label}</span>}
          </h4>
          <p className="text-muted mb-1">
            Category: {dish.category} | Price: ${dish.price}
            {dish.featured && ' | Featured'}
          </p>
          <p className="card-text">{dish.description}</p>
          <Link to={BASE} className="btn btn-outline-secondary btn-sm">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DishDetail;
