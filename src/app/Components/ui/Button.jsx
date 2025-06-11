export const Button = ({ children, onClick, disabled, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-5 py-2 rounded-md bg-[#6F8A86] text-white font-medium transition duration-200 hover:bg-[#CDD4BC] hover:text-[#4F6A68] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);
