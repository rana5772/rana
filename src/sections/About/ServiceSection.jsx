import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto space-y-20">
      {/* 1. Website Development */}
      <ServiceCard
        title="Website Development"
        image="/images/photos/1.png"
        imagePosition="left"
        tags={[
          { label: "Corporate Website", color: "bg-blue-300" },
          { label: "E-commerce Store", color: "bg-emerald-300" },
          { label: "SaaS Platforms", color: "bg-purple-300" },
          { label: "Portfolio Site", color: "bg-pink-300" },
          { label: "Landing Pages", color: "bg-yellow-300" },
          { label: "LMS Portals", color: "bg-orange-300" },
          { label: "Custom CRM", color: "bg-cyan-300" },
        ]}
        description="Looking for a high-performance website that converts visitors into customers? rana.net.in is a premier web development agency in Delhi and Pune, dedicated to building fast, secure, and visually captivating websites. With over 5 years of experience, we specialize in turning complex requirements into seamless digital experiences.<br/><br/> Our expert team focuses on cutting-edge technologies to ensure your site is not just a digital business card, but a powerful growth engine. From startups to established enterprises, we provide end-to-end web solutions—including strategy, UI/UX design, and full-stack development—tailored to elevate your brand's online presence."
        features={[
          {
            title: "Advanced Admin Panel",
            desc: "Empower your team with a custom dashboard to manage content, track user activity, and update site settings without touching a single line of code.",
          },
          {
            title: "Secure Payment Gateways",
            desc: "Seamlessly integrate trusted providers like Razorpay, Stripe, or PayPal with end-to-end encryption for safe and reliable transactions.",
          },
          {
            title: "Robust Secure Authentication",
            desc: "Protect user accounts with industry-standard JWT, OAuth, or Multi-Factor Authentication (MFA) to ensure data privacy and prevent unauthorized access.",
          },
          {
            title: "Responsive Web Design",
            desc: "Ensure your website looks and functions perfectly across all devices, from large desktop monitors to tablets and smartphones.",
          },
          {
            title: "SEO-Friendly Architecture",
            desc: "We build with search engines in mind, using clean code and optimized structures to help your business rank higher from day one.",
          },
          {
            title: "Scalable Database & API",
            desc: "Connect your website seamlessly with CRMs and external APIs using high-performance backend architectures that grow with your traffic.",
          },
        ]}
      />

      {/* 2. Android/iOS App Development */}
      <ServiceCard
        title="Android/iOS App development"
        image="/images/photos/2.png"
        imagePosition="right"
        tags={[
          { label: "Booking App", color: "bg-emerald-300" },
          { label: "Chatting App", color: "bg-blue-300" },
          { label: "e-Commerce App", color: "bg-purple-300" },
          { label: "Social Media App", color: "bg-pink-300" },
          { label: "Quiz App", color: "bg-yellow-300" },
          { label: "Inventory App", color: "bg-orange-300" },
          { label: "Food Ordering App", color: "bg-cyan-300" },
        ]}
        description="Are you looking for the most experienced designers and developers for your next digital project? If so, we are here to help. rana.net.in is a top-rated mobile app development company based in Delhi and Pune with over 5 years of industry experience. <br/><br/> We have built some of the most powerful and intuitive apps for our valued clients. Our deep expertise and dedicated in-house development team provide us an edge in delivering truly exceptional mobile applications. Whether you are an entrepreneur launching a new venture or you own an established business, we boast a talented team of app developers in Delhi and Pune to strategically plan, design, develop, and launch your mobile application—all with the goal of accelerating your business growth."
        features={[
          {
            title: "Cross-Platfaorm Compatibility",
            desc: "Build once and deploy seamlessly across both iOS and Android devices using industry-leading frameworks like React Native and Flutter.",
          },
          {
            title: "Real-time Notifications",
            desc: "Keep users engaged with instant push alerts and live data updates that trigger immediately upon specific user actions.",
          },
          {
            title: "Offline Functionality",
            desc: "Enable users to access core features and data without an active internet connection through sophisticated local caching.",
          },
          {
            title: "Secure User Authentication",
            desc: "Protect user data with multi-factor authentication and encrypted login protocols designed to meet modern security standards.",
          },
          {
            title: "Custom UI/UX Design",
            desc: "Deliver intuitive and visually stunning interfaces tailored specifically to your brand identity and target audience.",
          },
          {
            title: "Scalable Cloud Integration",
            desc: "Ensure your app grows effortlessly with robust backend and database solutions hosted on world-class cloud infrastructure.",
          },
        ]}
      />

      {/* 3. Graphic Design & Branding */}
      <ServiceCard
        title="Graphic Design & Branding"
        image="/images/photos/3.png"
        imagePosition="left"
        tags={[
          { label: "Logo Design", color: "bg-pink-300" },
          { label: "Brand Identity", color: "bg-purple-300" },
          { label: "Social Media Kits", color: "bg-blue-300" },
          { label: "Business Stationery", color: "bg-yellow-300" },
          { label: "UI/UX Prototyping", color: "bg-cyan-300" },
          { label: "Marketing Collateral", color: "bg-orange-300" },
        ]}
        description="A brand is more than just a logo—it's an emotion and a promise. At rana.net.in, we help businesses in Delhi and Pune find their unique voice through strategic visual storytelling. Our design philosophy blends aesthetics with psychology to create identities that resonate.<br/><br/>Whether you are a startup looking for your first logo or an established brand seeking a modern refresh, our creative team delivers high-impact visuals. We ensure your brand looks consistent and professional across every touchpoint, from Instagram to your office stationery."
        features={[
          {
            title: "Custom Logo Design",
            desc: "Unique, scalable vector logos that capture your brand essence and look great on everything from favicons to billboards.",
          },
          {
            title: "Brand Style Guides",
            desc: "A comprehensive rulebook covering typography, color palettes, and usage guidelines to keep your brand consistent.",
          },
          {
            title: "Social Media Assets",
            desc: "Ready-to-post templates for Instagram, LinkedIn, and Facebook that stop the scroll and drive engagement.",
          },
          {
            title: "Print-Ready Designs",
            desc: "Professional designs for business cards, brochures, and letterheads, optimized for high-quality physical printing.",
          },
        ]}
      />

      {/* 4. SEO & Digital Marketing */}
      <ServiceCard
        title="SEO & Digital Marketing"
        image="/images/photos/4.png"
        imagePosition="right"
        tags={[
          { label: "Keyword Research", color: "bg-blue-300" },
          { label: "On-Page SEO", color: "bg-emerald-300" },
          { label: "Technical SEO", color: "bg-purple-300" },
          { label: "Backlink Building", color: "bg-pink-300" },
          { label: "Content Strategy", color: "bg-yellow-300" },
          { label: "Local SEO (GMB)", color: "bg-orange-300" },
        ]}
        description="Visibility is the currency of the digital age. At rana.net.in, we don't just build websites; we ensure they are found by the right audience. Our SEO experts in Delhi and Pune use data-driven strategies to climb search engine rankings and stay there.<br/><br/>From auditing your technical foundation to crafting high-authority backlink profiles, we cover every aspect of search engine optimization. We focus on sustainable, white-hat techniques that drive organic traffic and increase your ROI without relying solely on paid ads."
        features={[
          {
            title: "Technical SEO Audit",
            desc: "We fix crawl errors, broken links, and sitemap issues to ensure search engines can index your site perfectly.",
          },
          {
            title: "Competitor Analysis",
            desc: "Identify what your rivals are doing right and find the gaps in their strategy to give you a competitive edge.",
          },
          {
            title: "Conversion Optimization",
            desc: "Traffic is useless without conversions. We optimize landing pages to turn visitors into paying customers.",
          },
          {
            title: "Performance Tracking",
            desc: "Receive transparent, monthly reports tracking your keyword rankings, traffic growth, and lead generation.",
          },
        ]}
      />

      {/* 5. AI Integration & Automation */}
      <ServiceCard
        title="AI Integration & Automation"
        image="/images/photos/5.png"
        imagePosition="left"
        tags={[
          { label: "AI Chatbots", color: "bg-purple-300" },
          { label: "NLP Solutions", color: "bg-indigo-300" },
          { label: "Predictive Analytics", color: "bg-blue-300" },
          { label: "Process Automation", color: "bg-emerald-300" },
          { label: "Custom LLMs", color: "bg-pink-300" },
        ]}
        description="Step into the future with custom AI solutions that streamline your operations and enhance customer engagement. We integrate cutting-edge Artificial Intelligence and Machine Learning models into your existing workflows to save time and reduce costs.<br/><br/>From intelligent customer support bots to automated data processing pipelines, our AI services are designed to give your business a modern, 'smart' advantage in a competitive market."
        features={[
          {
            title: "Smart Customer Support",
            desc: "Deploy 24/7 AI chatbots that handle queries, book appointments, and qualify leads with human-like accuracy.",
          },
          {
            title: "Workflow Automation",
            desc: "Eliminate repetitive manual tasks by automating data entry, reporting, and internal communications.",
          },
          {
            title: "Generative AI Tools",
            desc: "Custom-built tools for automated content creation, image generation, or code assistance tailored to your niche.",
          },
          {
            title: "Data Insights",
            desc: "Use machine learning to analyze user behavior and predict future trends, helping you make smarter business decisions.",
          },
          {
            title: "Automated AI Blog Publishing",
            desc: "Boost your SEO effortlessly with an AI engine that researches trending topics in your niche, writes high-quality articles, and automatically publishes them to your site on a schedule.",
          },
        ]}
      />

      {/* 6. Maintenance & Support*/}
      <ServiceCard
        title="Maintenance & Support"
        image="/images/photos/6.png"
        imagePosition="right"
        tags={[
          { label: "24/7 Monitoring", color: "bg-emerald-300" },
          { label: "Security Patches", color: "bg-red-300" },
          { label: "Daily Backups", color: "bg-blue-300" },
          { label: "Performance Tuning", color: "bg-purple-300" },
          { label: "Bug Fixes", color: "bg-yellow-300" },
        ]}
        description="We don't just 'build and bolt.' We believe in long-term partnerships, which is why we offer a complimentary maintenance tier for all our project clients. Technology moves fast, and we ensure your website or app stays ahead of the curve without any hidden costs.<br/><br/>Our free support package is designed to give business owners peace of mind. From ensuring your SSL certificates are active to patching critical security vulnerabilities, we handle the boring technical stuff so you can focus on making sales."
        features={[
          {
            title: "Zero-Cost Security Updates",
            desc: "We keep your CMS and plugins updated to the latest versions to protect you from the latest web threats at no extra charge.",
          },
          {
            title: "Cloud Backup Management",
            desc: "Regular automated backups of your database and files, ensuring you can restore your site instantly if anything goes wrong.",
          },
          {
            title: "Uptime Guarantee",
            desc: "We monitor your site 24/7. If it goes down, our team is alerted immediately to bring it back online before you even notice.",
          },
          {
            title: "Technical Consultation",
            desc: "Got a question about a new feature? Our experts are available for brief monthly consultations to guide your digital strategy.",
          },
        ]}
      />

      {/* 7. Quality Assurance & Manual/Auto Testing */}
      <ServiceCard
        title="Testing & Bug Fixing"
        image="/images/photos/7.png"
        imagePosition="left"
        tags={[
          { label: "Unit Testing", color: "bg-red-300" },
          { label: "Selenium/Cypress", color: "bg-emerald-300" },
          { label: "Load Testing", color: "bg-orange-300" },
          { label: "API Testing", color: "bg-blue-300" },
          { label: "Regression Testing", color: "bg-purple-300" },
          { label: "Bug Reporting", color: "bg-yellow-300" },
        ]}
        description="A single bug can cost your business reputation and revenue. At rana.net.in, we ensure your software is bulletproof before it reaches your users. Our QA team in Delhi and Pune meticulously tests every button, form, and flow to ensure a flawless user experience.<br/><br/>We combine human intuition with machine precision. While our manual testers explore your app like a real user to find edge cases, our automation engineers write scripts that run thousands of tests in seconds, ensuring that new updates never break existing features."
        features={[
          {
            title: "Automated Regression Suites",
            desc: "We build scripts using Cypress or Selenium that automatically check your entire site every time you make a change, saving hundreds of hours of manual work.",
          },
          {
            title: "Performance & Load Testing",
            desc: "We simulate thousands of concurrent users to ensure your platform stays fast and stable during high-traffic events like sales or product launches.",
          },
          {
            title: "Security Vulnerability Scanning",
            desc: "We hunt for weaknesses in your code, protecting your business from SQL injections, cross-site scripting (XSS), and other common cyber threats.",
          },
          {
            title: "Cross-Browser/Device Testing",
            desc: "We verify that your application works perfectly across Chrome, Safari, Firefox, and various mobile screen sizes and operating systems.",
          },
          {
            title: "User Acceptance Testing (UAT)",
            desc: "We facilitate real-world scenario testing to ensure the software doesn't just work technically, but actually solves your business problems and meets user expectations.",
          },
        ]}
      />
    </div>
  );
};

export default ServiceSection;
