import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

export default function App() {
    return (
        <Routes>
            <Route 
                path="/"
                element={<HomePage />}
            />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}