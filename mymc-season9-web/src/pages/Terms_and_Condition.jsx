import React from 'react';

export const TermsAndCondition = () => {
    return (
        <div className="terms-and-conditions bg-[#2A2A2A] p-6 rounded-lg shadow-md text-white">
            <header>
                <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
            </header>
            <main>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                    <p>Welcome to MyMC. These terms and conditions outline the rules and regulations for the use of MyMC's Website, located at https://mymc.com.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
                    <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use MyMC if you do not agree to take all of the terms and conditions stated on this page.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
                    <p>We employ the use of cookies. By accessing MyMC, you agree to use cookies in agreement with MyMC's Privacy Policy.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">4. License</h2>
                    <p>Unless otherwise stated, MyMC and/or its licensors own the intellectual property rights for all material on MyMC. All rights are reserved. You may access this for personal use, subject to the restrictions set in these terms.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">5. User Comments</h2>
                    <p>MyMC does not filter, edit, publish, or review user comments before their presence on the website. Comments reflect the views of the person posting them. MyMC is not liable for any comments posted by users.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">6. Hyperlinking to Our Content</h2>
                    <p>Certain organizations, such as government agencies and search engines, may link to our website without prior written approval.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">7. iFrames</h2>
                    <p>Without prior approval, you may not create frames around our website that alter the visual presentation.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">8. Content Liability</h2>
                    <p>We are not responsible for content appearing on external websites linked to MyMC.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">9. Your Privacy</h2>
                    <p>Please read our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">10. Reservation of Rights</h2>
                    <p>We reserve the right to request the removal of any links to our website and to amend these terms at any time.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">11. Removal of Links</h2>
                    <p>If you find any link on our website offensive, you are free to contact us for review. We may consider requests but are not obligated to respond.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">12. Disclaimer</h2>
                    <p>We exclude all representations, warranties, and conditions relating to our website and its use to the maximum extent permitted by law.</p>
                    <ul className="list-disc list-inside">
                        <li>Nothing in this disclaimer will limit our or your liability for death or personal injury.</li>
                        <li>Nothing will limit or exclude liability for fraud or fraudulent misrepresentation.</li>
                    </ul>
                    <p>As long as MyMC is provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                </section>
            </main>
            <footer className="mt-6 text-center">
                <p>&copy; 2025 MyMC. All Rights Reserved.</p>
            </footer>
        </div>
    );
};
