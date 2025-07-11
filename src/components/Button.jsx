export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 uppercase font-semibold rounded text-stone-900 bg-amber-400 hover:bg-amber-500 mt-4"
      {...props}
    >
      {children}
    </button>
  );
}

