import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
    >
      {children}
    </button>
  );
}
