import React from 'react'
import "./organs.css"

const Heading = ({ 
  heading = "Heading", 
  mt = true, 
  underline = true, 
  align = "center" // New prop with default value
}) => {

  // Map alignment prop to Tailwind classes
  const alignmentMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const alignmentClass = alignmentMap[align] || 'text-center';

  return (
    <div className={`${alignmentClass}  font-medium`}>
        <h1 className={`
          relative inline-block main-heading text-5xl mb-5 
          ${underline ? 'animated-underline' : ''} 
          ${mt ? 'mt-20' : ''}
        `}>
          {heading}
        </h1>
    </div>
  )
}

export default Heading