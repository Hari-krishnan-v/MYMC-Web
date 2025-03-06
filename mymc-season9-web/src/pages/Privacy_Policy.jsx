import React from 'react';

export const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy bg-[#2A2A2A] p-6 rounded-lg shadow-md text-white">
            <header>
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            </header>
            <main>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                    <p>Welcome to MyMC. Your privacy is important to us. This Privacy Policy outlines the types of information we collect and how we use, disclose, and protect it.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                    <p>We may collect personal information such as your name, email, and payment details when you interact with our website.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                    <p>We use your information to provide and improve our services, process transactions, and communicate with you.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
                    <p>We do not sell your personal data. However, we may share it with trusted third parties to provide our services.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
                    <p>We take reasonable measures to protect your personal information from unauthorized access.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                    <p>You have the right to access, modify, or delete your personal data. Contact us if you wish to exercise these rights.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
                </section>
            </main>
            <footer className="mt-6 text-center">
                <p>&copy; 2025 MyMC. All Rights Reserved.</p>
            </footer>
        </div>
    );
};
