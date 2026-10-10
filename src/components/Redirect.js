import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Slide 12: Redirect dùng hook useNavigate; trong useEffect gọi navigate(props.path)
// để chuyển hướng ngay khi component được gắn vào cây DOM.
// replace: true -> thay luôn mục "/" trong lịch sử, bấm Back không bị kẹt lại trang "/".
function Redirect(props) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(props.path, { replace: true });
  }, [navigate, props.path]);

  return null;
}

export default Redirect;
