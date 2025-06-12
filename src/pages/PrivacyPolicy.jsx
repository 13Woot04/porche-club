import React from 'react';

const PrivacyPolicy = () => (
  <div className="container mx-auto px-4 py-16 max-w-3xl text-neutral-900 bg-white rounded-xl mt-12 mb-24">
    <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
    <section className="mb-8">
      <p>At Porche, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us. By visiting our website or using our services, you agree to the terms outlined in this policy.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li><b>Personal Information:</b> We may collect personal information such as your name, email address, phone number, and any other details you provide when making a reservation, placing an order, or subscribing to our updates.</li>
        <li><b>Usage Data:</b> We collect information on how our website is accessed and used, which may include your IP address, browser type, pages visited, and time spent on the site.</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li><b>Reservation & Order Fulfillment:</b> To confirm bookings, manage table reservations, and fulfill online food and beverage orders.</li>
        <li><b>Customer Service:</b> To respond to your inquiries, provide support, and improve your experience with us.</li>
        <li><b>Marketing & Promotions:</b> To share special offers, event invitations, new menu items, or updates via email or SMS. You can opt out at any time.</li>
        <li><b>Legal Compliance:</b> To comply with applicable laws, respond to legal requests, and enforce our policies.</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Sharing of Information</h2>
      <ul className="list-disc ml-6">
        <li><b>Service Providers:</b> We may share your information with trusted partners who help us operate our website, process payments, manage deliveries, or conduct marketing on our behalf.</li>
        <li><b>Business Transfers:</b> In the event of a business transition like a merger or acquisition, your information may be part of the assets transferred.</li>
        <li><b>Legal Requirements:</b> We may disclose your information where required by law or for legal proceedings.</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Security of Your Information</h2>
      <p>We use industry-standard security measures to protect your information. However, no online transmission is completely secure, and we advise you to be cautious when sharing personal details online.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Your Rights and Choices</h2>
      <ul className="list-disc ml-6">
        <li><b>Access & Correction:</b> You may request access to your personal information and ask for updates or corrections.</li>
        <li><b>Data Deletion:</b> You may request that we delete your personal data, subject to legal requirements.</li>
        <li><b>Opt-Out:</b> You can opt out of promotional messages by clicking the unsubscribe link or contacting us directly.</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
      <p>Our website may contain links to third-party websites (e.g., delivery apps, event partners). We are not responsible for their privacy practices and encourage you to review their privacy policies.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
      <p>We may update this policy from time to time. Updates will be posted on this page with the revised date. Continued use of our website after any changes means you accept those updates.</p>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:marketing@porcheclub.com" className="text-accent-500 underline">marketing@porcheclub.com</a>.</p>
    </section>
  </div>
);

export default PrivacyPolicy; 