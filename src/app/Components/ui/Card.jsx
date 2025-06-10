export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
