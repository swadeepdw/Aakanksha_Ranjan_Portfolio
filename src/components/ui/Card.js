import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg shadow-md bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
