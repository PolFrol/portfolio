import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage } from './pages/main/main-page';
import { QrPage } from './pages/qr/qr';
import { InputPage } from "./pages/input/input";
import { DashboardPage } from "./pages/dashboard/dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cases/qr-generator" element={<QrPage />} />
                <Route path="/cases/input-payment" element={<InputPage />} />
                <Route path="/cases/dashboard" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
