export default function MainButton({ children, primary, style }) {
  return (
    <button
      className={`${
        primary
          ? "border border-primary-100 bg-primary-100 text-tertiary-200"
          : "border border-primary-100 rounded-lg bg-tertiary-300 text-primary-100"
      } p-5 text-lg uppercase font-body text-white font-bold md:px-[34px] md:py-5 lg:w-full  ${style}`}
    >
      {children}
    </button>
  );
}

export function Button({ children, style, buttonStyle }) {
  return (
    <button
      className={`${
        buttonStyle
          ? buttonStyle
          : "bg-blue-600 text-white rounded-full hover:bg-blue-800 hover:text-black"
      } w-fit h-fit border border-primary-100 py-3.5 px-6 font-body font-medium transition-all duration-200 ease-in ${style}`}
    >
      {children}
    </button>
  );
}
