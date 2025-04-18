import './App.css';
import "@radix-ui/themes/styles.css";
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from "react-router-dom";
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
import {AdminDevUpdate} from "./Admin_panel/AdminDevUpdate.jsx";
import {OrderVew} from "./pages/OrderVew.jsx";
import {AdminLogin} from "./Admin_panel/Admin_login.jsx";

function App() {
    const location = useLocation();
    const {checkAuth, adminCheckAuth, isAdminAuthenticated} = useAuthStore();

    // Check user authentication
    useEffect(() => {
        checkAuth();
        adminCheckAuth();
        console.log("Admin authenticated:", isAdminAuthenticated);

    }, [checkAuth, adminCheckAuth]);

    const ProtectedAdminRoute = ({children}) => {

        if (isAdminAuthenticated === false) {
            return <Navigate to="/admin/login" replace/>;
        }

        return children;
    };


    const RedirectAuthenticatedUser = ({children}) => {

        if (isAdminAuthenticated) {
            return <Navigate to='/admin/dashboard' replace/>;
        }
        return children;
    };

    if (isAdminAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Analytics />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>

                    <Route path="/" element={<StartPage />} />

                    <Route path="/home" element={<Dashboard />} />

                    <Route path="/store" element={<Store />} />

                    <Route path="/news-and-announcement" element={<NewsAnnouncement />} />

                    <Route path="/play" element={<Play />} />

                    <Route path="/terms-and-conditions" element={<TermsAndCondition />} />

                    <Route path="/orders" element={<OrderVew />} />

                    <Route path="/refund-policy" element={<RefundPolicy />} />

                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                    <Route path="/admin/login" element={
                        <RedirectAuthenticatedUser>
                            <AdminLogin/>
                        </RedirectAuthenticatedUser>

                    }/>
                    {/*  Secure Admin Routes */}
                    <Route path="/admin/dashboard" element={
                        <ProtectedAdminRoute>
                            <AdminDashboard/>
                        </ProtectedAdminRoute>
                    }/>
                    <Route path="/admin/users" element={
                        <ProtectedAdminRoute>
                            <AdminUsersView/>
                        </ProtectedAdminRoute>
                    }/>
                    <Route path="/admin/orders" element={
                        <ProtectedAdminRoute>
                            <AdminOrder/>
                        </ProtectedAdminRoute>
                    }/>
                    <Route path="/admin/announcement" element={
                        <ProtectedAdminRoute>
                            <AdminDevUpdate/>
                        </ProtectedAdminRoute>
                    }/>
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