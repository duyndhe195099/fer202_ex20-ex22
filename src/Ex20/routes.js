import React from 'react';
import { Route, useParams } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────
// Exercise 20: Decoupling route declarations (slide 10 - 12)
// Tách TOÀN BỘ khai báo route ra file riêng: Ex20App chỉ việc gọi renderRoutes().
// Thêm / sửa / xóa trang chỉ cần sửa mảng `routes` dưới đây.
// Các path ở đây là đường dẫn TƯƠNG ĐỐI trong bài: '/products' thực tế là /ex20/products.
// ─────────────────────────────────────────────────────────────

// Trang User Profile - route có tham số tùy chọn "/users/:userId?"
// (slide 15 - Resource IDs in routes: ":" mở đầu một biến trên URL;
//  slide 17 - Optional parameters: dấu "?" nghĩa là có thể bỏ trống)
//
// SỬA SO VỚI ĐỀ: đề viết  component: ({ params }) => ...  (kiểu React Router v5).
// Ở v6, component KHÔNG nhận prop `params`, phải lấy bằng hook useParams().
function UserProfile() {
  const { userId } = useParams();
  return <h1>User Profile: {userId ?? '(no user id)'}</h1>;
}

export const routes = [
  {
    path: '/',
    component: () => <h1>Home Page</h1>,
    exact: true, // v6 bỏ `exact` (mọi route mặc định khớp chính xác) -> chỉ giữ cho giống đề
  },
  {
    path: '/products',
    component: () => <h1>Products Page</h1>,
  },
  {
    path: '/about',
    component: () => <h1>About Page</h1>,
  },
  {
    path: '/contact',
    component: () => <h1>Contact Page</h1>,
  },
  {
    path: '/users/:userId?',
    component: UserProfile,
  },
  {
    // path="*" khớp mọi URL còn lại -> trang 404 (thêm ngoài đề)
    path: '*',
    component: () => <h1>404 - Page Not Found</h1>,
  },
];

export const renderRoutes = () => {
  return routes.map((route, index) => {
    // SỬA SO VỚI ĐỀ: đề viết  element={route.component}  (truyền HÀM).
    // v6 yêu cầu `element` là một React ELEMENT (<Component />).
    const Component = route.component;
    return <Route key={index} path={route.path} element={<Component />} />;
  });
};
