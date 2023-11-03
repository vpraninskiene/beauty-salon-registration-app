import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BookingsPage } from './pages/BookingsPage/BookingsPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/">Home</Link>
    
        <Routes>
          <Route index element={<BookingsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;