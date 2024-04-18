import React from 'react'

const Button = ({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColr ="text-white",
    className = '',
    ...props
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColr}`} {...props}>
        {children}
    </button>
  )
}

export default Button