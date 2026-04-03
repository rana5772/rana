import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const lastUpdated = "April 2, 2026";

  return (
    <div className=" min-h-screen">
      <Helmet>
        <title>Privacy Policy | rana.net.in</title>
        <meta
          name="description"
          content="Privacy Policy for rana.net.in. Learn how we collect, use, and protect your data and our use of Google AdSense cookies."
        />
        <link rel="canonical" href="https://rana.net.in/privacy-policy" />
      </Helmet>

      <div className="max-w-6xl mt-20 mx-auto">
        <div className="bg-white shadow-sm rounded-xl p-8 md:p-12 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 main-heading">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8 font-medium">
            Effective Date: {lastUpdated}
          </p>

          <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Introduction
              </h2>
              <p>
                At <strong>rana.net.in</strong>, we prioritize the privacy of
                our visitors. This Privacy Policy outlines the types of personal
                information we collect and how we use it. By using our website,
                you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 text-blue-600">
                2. Google DoubleClick DART Cookie
              </h2>
              <p className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                Google is a third-party vendor on our site. It uses cookies,
                known as DART cookies, to serve ads to our site visitors based
                upon their visit to <strong>rana.net.in</strong> and other sites
                on the internet. You may choose to decline the use of DART
                cookies by visiting the Google ad and content network Privacy
                Policy at: <br />
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-sm underline font-medium"
                >
                  policies.google.com/technologies/ads
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Information We Collect
              </h2>
              <p>We may collect information in the following ways:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Contact Information:</strong> Name, email, and phone
                  number when you inquire about our development services.
                </li>
                <li>
                  <strong>Log Files:</strong> We follow a standard procedure of
                  using log files which include IP addresses, browser type, and
                  time stamps.
                </li>
                <li>
                  <strong>Cookies:</strong> To store visitor preferences and
                  optimize your experience on our platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Third-Party Privacy Policies
              </h2>
              <p>
                Our Privacy Policy does not apply to other advertisers or
                websites. We advise you to consult the respective Privacy
                Policies of these third-party ad servers (like Google AdSense)
                for more detailed information on their practices and
                instructions on how to opt-out.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Data Protection Rights (GDPR/CCPA)
              </h2>
              <p>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the right to
                access, rectification, erasure, and to restrict processing of
                their personal data. If you make a request, we have one month to
                respond to you.
              </p>
            </section>

            <section className="pt-6 border-t border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Contact Information
              </h2>
              <p className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-900">
                Questions about the Terms and Conditions should be sent to us
                at: <br />
                <strong>Email:</strong> vaibhav.1098@hotmail.com <br />
                <strong>Phone:</strong> +91 9311650067 <br />
                <strong>Address:</strong> Nagad Computer Wholesalers, Shikrapur,
                Maharashtra 412208, India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
