import React from "react";
import { Helmet } from "react-helmet-async";

const TnC = () => {
  const lastUpdated = "April 2, 2026";

  return (
    <div className=" min-h-screen">
      <Helmet>
        <title>Terms and Conditions | rana.net.in</title>
        <meta
          name="description"
          content="Official terms and conditions for rana.net.in. Services include web development, mobile apps, and AI solutions by Vaibhav Rana."
        />
        <link rel="canonical" href="https://rana.net.in/terms-&-conditions" />
      </Helmet>

      <div className="max-w-6xl mt-20 mx-auto">
        <div className="bg-white shadow-sm rounded-xl p-8 md:p-12 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 main-heading">
            Terms and Conditions
          </h1>
          <p className="text-gray-500 mb-8 font-medium">
            Last Updated: {lastUpdated}
          </p>

          <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing <strong>rana.net.in</strong>, you agree to be bound
                by these terms and conditions. If you disagree with any part of
                these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. Professional Services
              </h2>
              <p>We provide high-impact technology solutions, including:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Custom Website Development (Portfolio, E-commerce, SaaS)
                </li>
                <li>Mobile App Development (Android & iOS)</li>
                <li>AI Integrations & SEO Optimization</li>
                <li>Cloud Maintenance & Security Testing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Payments & Pricing
              </h2>
              <p>
                All project costs are based on the specific plan selected (e.g.,
                Portfolio Site at ₹5,000/- or Advanced E-commerce at ₹16,000/-).
                Payments are processed via secure gateways. Services are
                non-refundable once the development phase has officially
                commenced.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Intellectual Property
              </h2>
              <p>
                Upon receipt of full payment, the client owns the final software
                product. <strong>rana.net.in</strong> and Vaibhav Rana reserve
                the right to include the completed project in our professional
                portfolio unless otherwise agreed upon via a signed NDA.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Delivery & Maintenance
              </h2>
              <p>
                Project timelines (e.g., 5 days for websites, 2 weeks for apps)
                depend on timely client feedback. Free maintenance is provided
                for a limited duration (1–3 months) based on the package
                selected and covers critical bug fixes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                We strive for 100% uptime and security; however,{" "}
                <strong>rana.net.in</strong> shall not be held liable for any
                indirect or consequential loss of data, profit, or business
                interruption arising from the use of our digital products.
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

export default TnC;
