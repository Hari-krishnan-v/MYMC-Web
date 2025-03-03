import './App.css';
import "@radix-ui/themes/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.jsx";
import {Store} from "./pages/Store.jsx";
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <>
<Analytics/>

        <Router>
            <Routes>
                <Route path="/"  element={<Dashboard />} />
                <Route path={"/store"} element={<Store/>} />

            </Routes>
        </Router>
        </>
    );
}

export default App;
