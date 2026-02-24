import React, { useState, useLayoutEffect, useRef } from "react";
import Heading from "../../components/Heading"; // Restored your import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const CodeSection = () => {
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    // Always scroll to top when About page mounts
    window.scrollTo({ top: 0, behavior: "instant" });

    // Logic for GSAP animation
    const text = new SplitType(textRef.current, { types: "chars" });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
        once: false,
      },
      x: () => Math.random() * 400 - 200,
      y: () => Math.random() * 400 - 200,
      opacity: 0,
      rotation: () => Math.random() * 180 - 90,
      stagger: 0.02,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      text.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const codeString = `<div className="flex justify-center items-center primary-bg text-white p-4">
   <h1 className="text-2xl">Hello, World!</h1>
   <p>Hello React.jsx</p>
</div>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sansStyle = {
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
  };

  return (
    <div>
      <div className="relative max-w-2xl mx-auto">
        {/* Restored your original p tag and id */}
        <p
          className="text-center text-5xl text-gray-700 new-font"
          id="text1"
          ref={textRef}
        >
          Developer <br /> Approved Logic
        </p>

        {/* Main Container: Light Theme */}
        <div className="bg-white my-10 rounded-lg shadow-xl overflow-hidden border border-gray-200">
          {/* Window Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>

            <button
              onClick={copyToClipboard}
              className="text-xs font-medium text-gray-500 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded transition-all active:scale-95"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Code Body: Vibrant Light Palette */}
          <div className="p-6 overflow-x-auto text-[15px] leading-relaxed">
            <pre className="text-gray-700 whitespace-pre" style={sansStyle}>
              <code style={sansStyle}>
                <span className="text-[#57606a]">&lt;</span>
                <span className="text-[#116329]">div</span>{" "}
                <span className="text-[#953800]">className</span>=
                <span className="text-[#0550ae]">
                  "flex justify-center items-center primary-bg text-white p-4"
                </span>
                <span className="text-[#57606a]">&gt;</span>
                {"\n   "}
                <span className="text-[#57606a]">&lt;</span>
                <span className="text-[#116329]">h1</span>{" "}
                <span className="text-[#953800]">className</span>=
                <span className="text-[#0550ae]">"text-2xl"</span>
                <span className="text-[#57606a]">&gt;</span>
                <span className="text-[#24292f]">Hello, World!</span>
                <span className="text-[#57606a]">&lt;/</span>
                <span className="text-[#116329]">h1</span>
                <span className="text-[#57606a]">&gt;</span>
                {"\n   "}
                <span className="text-[#57606a]">&lt;</span>
                <span className="text-[#116329]">p</span>
                <span className="text-[#57606a]">&gt;</span>
                <span className="text-[#24292f]">Hello React.jsx</span>
                <span className="text-[#57606a]">&lt;/</span>
                <span className="text-[#116329]">p</span>
                <span className="text-[#57606a]">&gt;</span>
                {"\n"}
                <span className="text-[#57606a]">&lt;/</span>
                <span className="text-[#116329]">div</span>
                <span className="text-[#57606a]">&gt;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div
        className="text-center font-medium text-4xl text-gray-700 new-font"
        id="text2"
        data-aos="fade-down"
        data-aos-offset="50"
      >
        Pixel Perfect UI
      </div>
    </div>
  );
};

export default CodeSection;
