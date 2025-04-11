import './App.css';
import "@radix-ui/themes/styles.css";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard.jsx";
import {Store} from "./pages/Store.jsx";
import {Analytics} from '@vercel/analytics/react';
import {TermsAndCondition} from "./pages/Terms_and_Condition.jsx";
import {RefundPolicy} from "./pages/RefundPolicy.jsx";
import {PrivacyPolicy} from "./pages/Privacy_Policy.jsx";
import React, {useEffect} from "react";
import {AnimatePresence} from 'framer-motion';
import StartPage from "./pages/StartPage.jsx";
import {HelmetProvider} from 'react-helmet-async';
import useAuthStore from "./store/authStore.js";
import NewsAnnouncement from "./pages/News&Announcement.jsx";
import {Play} from "./pages/Play.jsx";
import {AdminDashboard} from "./Admin_panel/Admin_dashboard.jsx";
import {AdminUsersView} from "./Admin_panel/AdminUsersView.jsx";
import {AdminOrder} from "./Admin_panel/AdminOrder.jsx";
import {AdminAnnouncement} from "./Admin_panel/AdminAnnouncement.jsx";



function App() {
    const location = useLocation();
    const checkAuth = useAuthStore((state) => state.checkAuth);

    useEffect(() => {

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);


    return (
        <>
            <Analytics />
            <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/store" element={<Store />} />
                    <Route path={"/news-and-announcement"} element={<NewsAnnouncement/>}/>
                    <Route path="/play" element={<Play/>} />
                    <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path={"/admin/dashboard"} element={<AdminDashboard/>}/>
                    <Route path={"/admin/users"} element={<AdminUsersView/>}/>
                    <Route path={"/admin/orders"} element={<AdminOrder/>}/>
                    <Route path={"/admin/announcement"} element={<AdminAnnouncement/>}/>

                </Routes>
            </AnimatePresence>
        </>
    );
}

const AppWrapper = () => (
    <HelmetProvider>
    <Router>
        <App />
    </Router>
    </HelmetProvider>
);

export default AppWrapper;