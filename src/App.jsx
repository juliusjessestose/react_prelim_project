import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Home, Errorpage, Edit, Login, Logout } from "./pages";

function App() {
  return (
    <>
      <div className="d-flex align-item-center nav">
        <Link to="/" className="h2 text-white p-3">
          Home
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
