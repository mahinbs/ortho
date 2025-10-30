
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false,
  icon 
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 focus:ring-teal-500 shadow-lg hover:shadow-2xl',
    secondary: 'bg-white text-teal-600 border-2 border-teal-500 hover:bg-teal-50 focus:ring-teal-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gray-200 text-gray-700 hover:border-teal-500 hover:text-teal-600 focus:ring-teal-500 bg-white/50 backdrop-blur-sm hover:bg-white/80 shadow-lg hover:shadow-xl',
    ghost: 'text-gray-600 hover:text-teal-600 hover:bg-teal-50/80 focus:ring-teal-500 backdrop-blur-sm'
  };
  
  const sizes = {
    sm: 'px-5 py-3 text-sm',
    md: 'px-7 py-4 text-base',
    lg: 'px-9 py-5 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
