import React from 'react';

// FIX: Added 'as' prop to allow component to be rendered as a different element type.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  as?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, as: Component = 'button', ...props }) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = variant === 'primary' 
    ? "bg-primary text-white hover:bg-orange-600 focus:ring-primary"
    : "bg-secondary text-white hover:bg-slate-800 focus:ring-secondary";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <Component className={`${baseClasses} ${variantClasses} ${widthClass}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;
