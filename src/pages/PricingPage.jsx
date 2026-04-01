import React from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";
import GradientButton from "../components/GradientButton";
import PortfolioComponent from "../components/PortfolioComponent";
import ComparisonTable from "../components/ComparisonTable";
import SpecialPlans from "../components/SpecialPlans";
import MobileAppDev from "../components/MobileAppDev";
import FoodDeliveryComponent from "../components/FoodDeliveryComponent";
import EcommerceComponent from "../components/EcommerceComponent";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | rana.net.in</title>
        <meta
          name="description"
          content="View flexible pricing options for web and app development services from rana.net.in, tailored to your business needs."
        />
        <link rel="canonical" href="https://rana.net.in/pricing" />
      </Helmet>

      <Heading
        heading={
          <>
            <span className="md:hidden">Pricing Model</span>
            <span className="hidden md:inline">Our Pricing Model</span>
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PortfolioComponent />
        <ComparisonTable />
        <MobileAppDev />
        <FoodDeliveryComponent />
        <EcommerceComponent />
        <SpecialPlans />
      </div>
    </>
  );
};

export default PricingPage;
