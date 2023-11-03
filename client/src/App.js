import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BookingsPage } from './pages/BookingsPage/BookingsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import LogoutPage from './pages/LogoutPage/LogoutPage';
import RequireAuth from './components/RequireAuth/RequireAuth';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/">Home</Link>
        <Routes>
          <Route index element={<RequireAuth><BookingsPage/></RequireAuth>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/logout" element={<LogoutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;