import React, { useState } from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import GradientButton from "../../components/GradientButton";
import Heading from "../../components/Heading";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Website Development Enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );

    window.location.href = `mailto:vaibhav.1098@hotmail.com?subject=${subject}&body=${body}`;

    setFormData({
      fullName: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="max-w-6xl mt-20 max-lg:max-w-3xl mx-auto rounded-md bg-white/50 backdrop-blue-2xl">
      <div className="grid lg:grid-cols-2 lg:gap-14 gap-5 items-center relative overflow-hidden p-8 rounded-md before-gradient-bg before:absolute before:right-0 before:w-[300px] before:h-full max-lg:before:hidden [box-shadow:0_2px_10px_-3px_var(--shadow-primary)]">
        <div>
          <Heading heading="Let's Connect" mt={false} underline={false} />

          <div className="text-[15px] text-center flex justify-center items-center gap-5 text-slate-600 leading-relaxed mb-6">
            <div>
              <MdPhone className="inline mr-2" />
              <a
                href="tel:+9311650067"
                className="underline hover:text-slate-900 transition-colors"
              >
                9311650067
              </a>
            </div>

            <div>
              <MdEmail className="inline mr-2" />
              <a
                href="mailto:vaibhav.1098@hotmail.com"
                className="underline hover:text-slate-900 transition-colors"
              >
                vaibhav.1098@hotmail.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 border-focus outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone No."
                pattern="[0-9]{10}"
                required
                value={formData.phone}
                onChange={handleChange}
                className="px-2 py-3 bg-white w-full text-slate-900 text-sm border-b border-slate-300 border-focus outline-none"
              />

              <textarea
                name="message"
                placeholder="Write Message (optional)"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="px-2 pt-3 resize-none bg-white w-full mb-5 text-slate-900 text-sm border-b border-slate-300 border-focus outline-none"
              ></textarea>
            </div>

            <GradientButton text="Send Message" fullWidth={true} />
          </form>

          {/* Detailed Contact Info */}
          <div className="text-gray-800 border mt-5 border-gray-500/50 rounded-xl p-5">
            <p className="font-medium new-font flex items-center gap-2">
              <FaMapMarkerAlt className="primary-text" />
              Nagad Computer Wholesalers
            </p>

            <p className="text-sm opacity-75">
              Shikrapur, Maharashtra 412208, India
            </p>
          </div>
        </div>

        {/* Map Container */}
        <div className="z-10 relative h-full min-h-[450px] rounded-lg overflow-hidden shadow-inner border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6433544605156!2d74.1135!3d18.6675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQwJzAzLjAiTiA3NMKwMDYnNDguNiJF!5e0!3m2!1sen!2sin!4v1645000000000"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Nagad Computers Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;