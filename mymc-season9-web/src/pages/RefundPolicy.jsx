import React from 'react';

export const RefundPolicy = () => {
    return (
        <div className="refund-policy bg-[#2A2A2A] p-6 rounded-lg shadow-md text-white">
            <header>
                <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
            </header>
            <main>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
                    <p>At MyMC, we strive to provide the best possible service. However, all purchases made on MyMC are considered final and non-refundable.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">2. Eligibility for Refunds</h2>
                    <p>Refunds may be considered in the following cases:</p>
                    <ul className="list-disc list-inside">
                        <li>Accidental duplicate purchases.</li>
                        <li>Technical issues preventing the delivery of purchased items.</li>
                        <li>Unauthorized transactions or fraudulent activity.</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">3. Refund Request Process</h2>
                    <p>If you believe you are eligible for a refund, please follow these steps:</p>
                    <ul className="list-disc list-inside">
                        <li>Contact our support team at <a href="mailto:support@mymc.com" className="underline">support@mymc.com</a> within 7 days of purchase.</li>
                        <li>Provide details of your transaction, including order ID and reason for refund.</li>
                        <li>Our team will review your request and respond within 5-7 business days.</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">4. Non-Refundable Items</h2>
                    <p>The following purchases are not eligible for a refund:</p>
                    <ul className="list-disc list-inside">
                        <li>In-game items that have already been redeemed.</li>
                        <li>Digital goods delivered as intended.</li>
                        <li>Refund requests beyond the 7-day period.</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">5. Chargebacks</h2>
                    <p>Initiating a chargeback without contacting MyMC support first may result in account suspension or banning from future purchases.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
                    <p>If you have any questions about our refund policy, please reach out to us at <a href="mailto:support@mymc.com" className="underline">support@mymc.com</a>.</p>
                </section>
            </main>
            <footer className="mt-6 text-center">
                <p>&copy; 2025 MyMC. All Rights Reserved.</p>
            </footer>
        </div>
    );
};
