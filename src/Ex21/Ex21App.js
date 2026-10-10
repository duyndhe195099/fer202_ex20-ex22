import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DishDetail from './pages/DishDetail';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Slide 9 (Declaring routes): <Routes> bọc các <Route>, mỗi Route = path + element.
// Slide 11-12 (Layout + Outlet): Layout là route cha, các route con hiện ở chỗ <Outlet />.
// Slide 15 (Resource IDs in routes): dấu ":" mở đầu một biến trên URL
//   "dishes/:id" -> /ex21/dishes/0, /ex21/dishes/1 ...  Component con đọc id bằng useParams().
function Ex21App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Bài 2: danh sách món ăn nằm ở Home (index), chi tiết theo id */}
        <Route path="dishes/:id" element={<DishDetail />} />

        {/* Bài 1: danh sách user + chi tiết theo id */}
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Ex21App;
