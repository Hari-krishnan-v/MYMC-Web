import './App.css';
import "@radix-ui/themes/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.jsx";
import {Store} from "./pages/Store.jsx";
import { Analytics } from '@vercel/analytics/react';
import {TermsAndCondition} from "./pages/Terms_and_Condition.jsx";
import {RefundPolicy} from "./pages/RefundPolicy.jsx";
import {PrivacyPolicy} from "./pages/Privacy_Policy.jsx";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };

    }, []);
    return (
        <>
<Analytics/>

        <Router>
            <Routes>
                <Route path="/"  element={<Dashboard />} />
                <Route path={"/store"} element={<Store/>} />
                <Route path={"/terms-and-conditions"} element={<TermsAndCondition/> } />
                <Route path={"/refund-policy"} element={<RefundPolicy/>} />
                <Route path={"/privacy-policy"} element={<PrivacyPolicy/>} />


            </Routes>
        </Router>
        </>
    );
}

export default App;
