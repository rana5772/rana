import React from 'react';

const services = [
  {
    title: "DAPP Development",
    description: "A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.",
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-500"
  },
  {
    title: "Web 3.0 Development",
    description: "Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web.",
    color: "bg-purple-500",
    borderColor: "border-purple-500",
    textColor: "text-purple-500"
  },
  {
    title: "Project Audit",
    description: "A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld.",
    color: "bg-blue-400",
    borderColor: "border-blue-400",
    textColor: "text-blue-400"
  },
  {
    title: "Hacking / RE",
    description: "A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.",
    color: "bg-yellow-400",
    borderColor: "border-yellow-400",
    textColor: "text-yellow-400"
  },
  {
    title: "Bot/Script Development",
    description: "Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process.",
    color: "bg-green-500",
    borderColor: "border-green-500",
    textColor: "text-green-500"
  }
];

const ServiceCard = ({ title, description, color, borderColor, textColor }) => (
  <div className="relative h-full">
    {/* The background shadow offset */}
    <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${color} rounded-lg`}></span>
    <div className={`relative h-full p-5 bg-white border-2 ${borderColor} rounded-lg`}>
      <div className="flex items-center -mt-1">
        <h3 className="my-2 ml-3 text-lg main-heading text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="mb-2 text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const GridSection = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full px-10 mx-auto xl:px-0 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 w-full">
        
        {/* First 2 items: each span 3 columns (half width) */}
        {services.slice(0, 2).map((service, index) => (
          <div key={index} className="md:col-span-3">
            <ServiceCard {...service} />
          </div>
        ))}

        {/* Next 3 items: each span 2 columns (one-third width) */}
        {services.slice(2).map((service, index) => (
          <div key={index + 2} className="md:col-span-2">
            <ServiceCard {...service} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default GridSection;