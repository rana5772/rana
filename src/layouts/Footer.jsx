import React from "react";
import { NavLink } from "react-router-dom";
const logo = "/images/logo.png";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function Footer() {
  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];
  return (
    <footer className="">
      <hr className="w-4/5 mx-auto mt-12 border-gray-800" />
      <button
        className="group border hover:bg-white mx-auto block border-t-0 p-3 rounded-b-md transition-all"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scroll to Top
        <MdKeyboardDoubleArrowUp className="inline-block ml-1 text-xl transition-transform duration-300 -translate-y-0.5 group-hover:-translate-y-2" />
      </button>

      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* Left block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-3">
                <NavLink to="/">
                  <img
                    src={logo}
                    alt="vr"
                    className="inline-block select-none h-[40px]"
                    draggable="false"
                  />
                </NavLink>
              </div>

              <p className="text-gray-800 mb-5">
                Offering web and app development services to build modern,
                responsive, and user-friendly digital solutions tailored to your
                business needs.
              </p>

              <h5 className="mt-6 text-lg new-font font-semibold text-gray-900">
                Navigation
              </h5>

              <ul className="mt-3 new-font">
                {navLinks.map((link, index) => (
                  <li key={index} className="mb-1">
                    <NavLink
                      to={link.path}
                      end={link.end}
                      className="inline-block link-primary transition-all duration-200 hover:translate-x-2"
                    >
                      → {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              <div className="text-sm">
                <h6 className="text-gray-900 new-font font-medium mb-2 text-[15px]">
                  Frontend Techstack
                </h6>
                <ul className="text-gray-800 space-y-1">
                  <li>React.jsx</li>
                  <li>NEXT.js</li>
                  <li>Tailwind CSS</li>
                  <li>Redux Toolkit</li>
                </ul>
              </div>

              <div className="text-sm">
                <h6 className="text-gray-900 new-font font-medium mb-2 text-[15px]">
                  Backend Techstack
                </h6>
                <ul className="text-gray-800 space-y-1">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Prisma</li>
                </ul>
              </div>

              <div className="text-sm">
                <h6 className="text-gray-900 new-font font-medium mb-2 text-[15px]">
                  Database <i className="bi bi-database-fill"></i>
                </h6>
                <ul className="text-gray-800 space-y-1">
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>FireBase</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left border-t border-gray-800 pt-8">
            <ul className="flex justify-center mb-4 sm:order-1 sm:ml-4 sm:mb-0">
              {[
                { icon: "bi-telephone-plus", href: "tel:9311650067" },
                { icon: "bi-whatsapp", href: "https://wa.link/lhr0lo" },
                {
                  icon: "bi-envelope",
                  href: "mailto:vaibhav.1098@hotmail.com",
                },
                {
                  icon: "bi-linkedin",
                  href: "https://www.linkedin.com/in/vaibhav-rana-profile",
                },
              ].map((social, idx) => (
                <li key={idx} className="ml-4 first:ml-0">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-2xl glass-dark hover:scale-110 w-10 h-10 rounded-lg transition-all"
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>

            <div className="text-black text-sm">
              © {new Date().getFullYear()} All Rights Reserved | rana.net.in
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
