export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block  my-2 text-xs font-bold tracking-wide uppercase"; 

  let inputClasses =
    "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <div>
      <label htmlFor={props.id} className={labelClasses}>{label}</label>
      <input id={props.id} className={inputClasses} {...props} />
    </div>
  );
}
