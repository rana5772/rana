import React from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";
import GradientButton from "../components/GradientButton";
import GlassBox from "../components/GlassBox";
import { FaWhatsapp, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    window.location.href = `mailto:vaibhav.1098@hotmail.com?subject=Website%20Development%20Enquiry&body=${encodeURIComponent(
      `Name: ${fd.get("name")}\nPhone: ${fd.get("phone")}\nProject: ${fd.get("textarea")}`,
    )}`;

    e.target.reset();
  };

  const contactDetails = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      value: "+91 9311650067",
      link: "https://wa.link/lhr0lo",
    },
    {
      icon: <MdEmail className="text-2xl" />,
      title: "Email",
      value: "vaibhav.1098@hotmail.com",
      link: "mailto:vaibhav.1098@hotmail.com",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "LinkedIn",
      value: "vaibhav-rana-profile",
      link: "https://www.linkedin.com/in/vaibhav-rana-profile",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | rana.net.in</title>
        <meta
          name="description"
          content="Get in touch with rana.net.in for web and app development enquiries, support, or collaboration."
        />
        <link rel="canonical" href="https://rana.net.in/contact" />
      </Helmet>

      <div className="contact-page">
        <Heading
          heading={
            <>
              <span className="md:hidden">Let's Connect</span>
              <span className="hidden md:inline">Let's Get in Touch</span>
            </>
          }
        />

        <GlassBox text="Feel free to connect" />

        <section className="md:mt-10" id="contact">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-start justify-center">
              {/* Info Column */}
              <div className="h-full pr-6">
                <p className="text-center lg:text-left max-w-5xl mb-10 mx-auto text-lg text-slate-800">
                  Whether you have a question about our services, need help with
                  a project, or just want to say hello, our team is ready to
                  chat.
                </p>

                <h2 className="text-2xl font-semibold new-font mb-6 text-gray-900">
                  Connect with us :-
                </h2>

                <ul className="space-y-6">
                  {contactDetails.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg gradient-bg-br text-white shadow-md hover:scale-105 transition-transform"
                      >
                        {item.icon}
                      </a>

                      <div className="ml-4">
                        <h3 className="text-lg font-medium new-font leading-6 text-gray-900">
                          {item.title}
                        </h3>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-800 underline"
                        >
                          {item.value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form Column */}
              <div
                data-aos="zoom-in"
                className="card border border-gray-300 rounded-md bg-white/70 h-fit p-5 md:p-12 shadow-lg"
                id="form"
              >
                <h2 className="mb-4 text-2xl font-semibold new-font">
                  Ready to Get Started?
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6 space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full rounded-md border bg-white border-gray-400 py-2 px-4 shadow-sm border-focus focus:outline-2 focus:outline-offset-0 focus:outline-[var(--border-focus)]"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      pattern="[0-9]{10}"
                      required
                      className="w-full rounded-md border bg-white border-gray-400 py-2 px-4 shadow-sm border-focus focus:outline-2 focus:outline-offset-0 focus:outline-[var(--border-focus)]"
                    />

                    <textarea
                      name="textarea"
                      rows="5"
                      placeholder="Explain your project... (optional)"
                      className="w-full rounded-md border bg-white border-gray-400 py-2 px-4 shadow-sm resize-none border-focus focus:outline-2 focus:outline-offset-0 focus:outline-[var(--border-focus)]"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <GradientButton text="Send Message" fullWidth={true} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <div className="overflow-hidden bg-white rounded-md mt-16 shadow-xl border border-gray-100">
          <div className="text-gray-800 p-5">
            <p className="font-medium new-font flex items-center gap-2">
              <FaMapMarkerAlt className="primary-text" />
              Delhi, India
            </p>

            <p className="text-sm opacity-75">
              Serving clients across India.
            </p>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=Delhi,India&t=&z=11&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            title="Delhi, India"
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;