import React from 'react';

const TextField = ({ 
  id, 
  label, 
  variant = 'filled',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  required = false,
  error = false,
  helperText = ''
}) => {
  const baseClasses = `
    w-full
    px-4
    py-3
    transition-all
    duration-200
    rounded-lg
    outline-none
    focus:ring-2
    focus:ring-blue-500
    ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
    ${variant === 'filled' ? 'bg-gray-100 focus:bg-white' : 'bg-white border-2'}
  `;

  return (
    <div className="relative w-full">
      {label && (
        <label 
          htmlFor={id}
          className={``
            block 
            mb-2 
            text-sm 
            font-medium 
            ${error ? 'text-red-500' : 'text-gray-700'}
          ``}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseClasses} ${className}`}
      />
      
      {helperText && (
        <p className={`mt-1 text-sm ${error ? 'text-red-500' : 'text-gray-600'}`}>  
          {helperText}
        </p>
      )}
    </div>
  );
};

export default TextField;