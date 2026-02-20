import React, { useState } from "react";
import Heading from "../../components/Heading";

const CodeSection = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `<div className="flex justify-center items-center bg-blue-500 text-white p-4">
   <h1 className="text-2xl">Hello, World!</h1>
   <a>Hello Reactjs</a>
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
    <div className="relative max-w-2xl mx-auto">
      <div className="flex justify-center">
        <p className="glass-dark text-center px-4 py-1 my-5 shadow-2xl">
          Pixel Perfect UI
          <span className="text-xl font-semibold"> + </span>
          Developer approved logic
        </p>
      </div>

      {/* Main Container: Light Theme */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
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
              {/* Brackets/Symbols: Slate Gray */}
              <span className="text-[#57606a]">&lt;</span>
              {/* Tags: Forest Green */}
              <span className="text-[#116329]">div</span>{" "}
              {/* Attributes: Burnt Orange */}
              <span className="text-[#953800]">className</span>=
              {/* Strings: Vibrant Blue */}
              <span className="text-[#0550ae]">
                "flex justify-center items-center bg-blue-500 text-white p-4"
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
              <span className="text-[#116329]">a</span>
              <span className="text-[#57606a]">&gt;</span>
              <span className="text-[#24292f]">Hello Reactjs</span>
              <span className="text-[#57606a]">&lt;/</span>
              <span className="text-[#116329]">a</span>
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
  );
};

export default CodeSection;
