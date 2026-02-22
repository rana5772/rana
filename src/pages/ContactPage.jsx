import React from "react";
import Heading from "../components/Heading";
import GradientButton from "../components/GradientButton";
import GlassBox from "../components/GlassBox";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    // Minimalistic execution: Direct mailto link construction
    window.location.href = `mailto:vaibhav.1098@hotmail.com?subject=Website%20Development%20Enquiry&body=${encodeURIComponent(
      `Name: ${fd.get("name")}\nPhone: ${fd.get("phone")}\nProject: ${fd.get("textarea")}`,
    )}`;
    e.target.reset();
  };

  const contactDetails = [
    {
      icon: "bi-whatsapp",
      title: "WhatsApp",
      value: "+91 9311650067",
      link: "https://wa.link/lhr0lo",
    },
    {
      icon: "bi-envelope",
      title: "Email",
      value: "vaibhav.1098@hotmail.com",
      link: "mailto:vaibhav.1098@hotmail.com",
    },
    {
      icon: "bi-linkedin",
      title: "LinkedIn",
      value: "vaibhav-rana-profile",
      link: "https://www.linkedin.com/in/vaibhav-rana-profile",
    },
  ];

  return (
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

      <section className="md:mt-10 dark:bg-slate-800" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start justify-center">
            {/* Info Column */}
            <div className="h-full pr-6">
              <p className="mt-3 mb-10 text-gray-800">
                Whether you have a question about our services, need help with a
                project, or just want to say hello, our team is ready to chat.
              </p>
              <h2 className="text-2xl font-semibold new-font mb-6 text-gray-900 dark:text-white">
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
                      <i className={`bi ${item.icon} text-2xl`}></i>
                    </a>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium new-font leading-6 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-800 underline dark:text-slate-400"
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
              <h2 className="mb-4 text-2xl font-semibold new-font dark:text-white">
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
            <i className="bi bi-geo-alt-fill primary-text"></i>Nagad Computer
            Wholesalers
          </p>
          <p className="text-sm opacity-75">
            Shikrapur, Maharashtra 412208, India
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2731872159847!2d74.113!3d18.665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cf7873426893%3A0x66f7f36965b9347a!2sShikrapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
