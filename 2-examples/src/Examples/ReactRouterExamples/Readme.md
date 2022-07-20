# Router: Component bao bọc tất cả các component khác của Routing
- Có nhiều loại:
+ BrowserRouter 
+ HashRouter : Loại routing có dấu #
+ StaticRouter: Thường dùng cho SSR (Server side rendering)
+ MemoryRouter: Thường dùng cho testing
- Lưu ý: Đặt all components của Routing bên trong Router
# Route: Render component khi match với path
- Mặc định exact=false, lúc đó Route sẽ match khi URL start with path
- Khi exact = true, lúc đó Route sẽ match khi URL = path

React router v6 doesn't support exact anymore.
# Switch: Nhóm gom nhiều Route, đảm bảo chỉ render route đầu tiên match path
- For react-router-dom v6 : Routes instead of "Switch" react-router
# Redirect: điều hướng từ Path này sang Path khác
- For react-router-dom v6, simply replace Redirect with Navigate
# Link: Đi tới Path tương ứng
# NavLink: Giống Link nhưng có thêm activeClassName
# useNavigate Instead of useHistory
// This is a React Router v6 app
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-2)}>Go 2 pages back</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      <button onClick={() => navigate(2)}>Go 2 pages forward</button>
    </>
  );
}

// v6
Trong một vài trường hợp, chúng ta lại muốn thay đổi URL chứ không muốn push URL mới:
navigate('/home');
navigate('/home', {replace: true});
navigate('/home', {state: state});


