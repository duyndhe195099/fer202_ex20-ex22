import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Slide 5: MỘT <BrowserRouter> duy nhất bọc toàn bộ app.
// (Ex 20 và Ex 22 trong đề tự đặt <Router> trong App; khi gộp 3 bài thì chỉ được có 1 Router,
//  vì React Router báo lỗi nếu có <Router> lồng trong <Router>.)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
