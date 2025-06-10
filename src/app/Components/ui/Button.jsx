export const Button = ({ children, onClick, disabled, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-md bg-emerald-600 text-white disabled:opacity-50 ${className}`}
  >
    {children}
  </button>
);
