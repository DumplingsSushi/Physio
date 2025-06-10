export const Input = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => (
  <input
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
  />
);
