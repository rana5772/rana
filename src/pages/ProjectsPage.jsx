import React from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";
import PhoneSection from "../components/PhoneSection";
import GlassBox from "../components/GlassBox";
import { ElfsightWidget } from "react-elfsight-widget";
import CodeSection from "../sections/About/CodeSection";

// https://hsjnfiwisdom.com
// https://dainmart.com
// https://upfound.ai
// https://ecommercetank.in
// https://optivue.in
// https://usewave.co
// https://kreativedeals.com

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | rana.net.in</title>
        <meta
          name="description"
          content="Explore previous web and app development projects delivered by rana.net.in for clients across industries."
        />
        <link rel="canonical" href="https://rana.net.in/projects" />
      </Helmet>

      <div>
        <Heading
          heading={
            <>
              <span className="md:hidden">Our Projects</span>
              <span className="hidden md:inline">Previous Projects</span>
            </>
          }
        />

        <GlassBox text="Success stories, shared." />

        <p className="text-center max-w-5xl mb-10 mx-auto text-lg text-slate-800">
          Every project has a story, and we're proud to have been part of these.
          Here is a look at the work we've done for industry leaders and
          ambitious startups alike.
        </p>

        {/* links */}
        <PhoneSection
          side={1}
          name="Upfound AI"
          link="https://upfound.ai"
          description="AI based hiring platform"
          details="Upfound AI provides AI-powered interview solutions for tech, non-tech, and high-volume hiring roles, helping companies streamline recruitment. "
          points={[
            "AI-powered automation for screening and evaluation",
            "Tailored workflows for diverse job roles",
            "Instant 5-minute setup with no commitment",
            "Data-driven scoring to highlight top talent",
            "Cost reduction through manual task elimination",
            "Faster response times to secure candidates",
            "Comprehensive analytics on hiring benchmarks",
          ]}
        />
        <PhoneSection
          side={2}
          name="HSJN FinWisdom"
          link="https://hsjnfinwisdom.com"
          description="Online stock market courses"
          details="HSJN FinWisdom offers stock market education, trading courses, Zerodha Demat account services, and merchandise for traders."
          points={[
            "Pro Trading Courses: Price Action to Options Greeks",
            "Authorized Zerodha Partner for Demat Accounts",
            "Exclusive Trading-Themed Merchandise Store",
            "Active Learning Community & YouTube Education",
            "Expertise in Stocks, Crypto, and Forex Markets",
            "Focus on Intraday, Swing, and Risk Management",
            "Empowering Traders through Expertise and Lifestyle",
          ]}
        />
        <PhoneSection
          side={1}
          name="Optivue"
          link="https://optivue.in"
          description="ERP platform for manufacturers"
          details="OptiVue is a smart ERP platform that helps manufacturing companies streamline operations and automate reporting. "
          points={[
            "Real-time visual dashboards and production tracking",
            "Integrated inventory, shortage, and quality control",
            "Instant PDF/Excel automated performance reporting",
            "Role-based team collaboration and activity tracking",
            "24/7 AI Assistant for instant order status updates",
            "Secure infrastructure with 99.9% guaranteed uptime",
          ]}
        />

        <PhoneSection
          side={2}
          name="Use Wave"
          link="https://usewave.co"
          description="Autopilot Instagram lead generator"
          details="UseWave offers a cloud-based tool that automates Instagram outreach by finding prospects, sending personalized DMs and follow-ups, and generating leads on autopilot."
          points={[
            "Automated cloud-based Instagram cold DMs and follow-ups",
            "Guaranteed results: One client in 30 days or pay nothing",
            "Targeting for followers, likers, and competitor leads",
            "Safety-first infrastructure with 7-day expert support",
            "Wave Pro: 60 DMs daily with multi-language capability",
            "Risk-free 7-day trial to automate lead generation",
          ]}
        />

        <PhoneSection
          side={1}
          name="Dain Mart"
          link="https://dainmart.com"
          description="Online clothing store"
          details="DainMart is an online shopping platform offering a wide range of products including fashion, electronics, appliances, beauty, home & furniture, groceries, and more."
          points={[
            "Latest Mobiles & Tablets from top global brands",
            "High-performance Electronics and smart home tech",
            "Premium TVs & large home appliances at best prices",
            "Trend-setting Fashion for all styles and occasions",
            "Curated Beauty, skincare, and personal care range",
            "Modern Home & Furniture for every living space",
            "Fresh Grocery essentials delivered to your doorstep",
            "Seamless Flight bookings with exclusive travel deals",
          ]}
        />

        <PhoneSection
          side={2}
          name="E-commerce Tank"
          link="https://ecommercetank.in"
          description="Amazon growth manager"
          details="Ecommerce Tank, is about providing account management and growth services for brands on major e-commerce platforms like Amazon, Flipkart, Myntra, Nykaa."
          points={[
            "10X sales growth through proven scaling strategies",
            "Trusted partner for 500+ successful global brands",
            "99% success rate in delivering measurable results",
            "Expert management for Amazon, Flipkart, and Myntra",
            "Multi-channel scaling on Nykaa, JioMart, and Meesho",
            "Dedicated support for brand visibility and growth",
          ]}
        />

        <PhoneSection
          side={1}
          name="Kreative Deals"
          link="https://kreativedeals.com"
          description="Cooperate gifting solutions"
          details="Kreative Deals provides corporate gifting, merchandising, and loyalty fulfillment solutions, connecting premium brands with businesses."
          points={[
            "Corporate gifting & custom merchandising solutions",
            "Loyalty fulfillment & business incentive programs",
            "Global distribution with 300+ brand partners",
            "Scalable 12,000 sq ft secure warehousing",
            "Logistics network covering 19,000+ pin codes",
            "High-capacity 80K+ monthly order fulfillment",
            "Trusted partner for Fortune 500 enterprises",
          ]}
        />
        <CodeSection />
      </div>
    </>
  );
};

export default ProjectsPage;
