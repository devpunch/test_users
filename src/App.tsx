import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Home
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
