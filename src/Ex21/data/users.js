// Dữ liệu Exercise 21 - bài 1
// Các user KHÔNG có id, và có 2 người tên "John" -> dùng VỊ TRÍ trong mảng (index)
// làm id trên URL: /users/0, /users/1, /users/2 ... (khớp ảnh đề: /users/2 = John Smith)
const users = [
  { firstName: 'John', lastName: 'Done', age: 25 },
  { firstName: 'Mary', lastName: 'Thompson', age: 35 },
  { firstName: 'John', lastName: 'Smith', age: 30 },
  { firstName: 'Emily', lastName: 'Johnson', age: 25 },
  { firstName: 'William', lastName: 'Davis', age: 34 },
];

export default users;
