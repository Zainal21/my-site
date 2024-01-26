const Button: React.FC = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className={`flex items-center p-2 rounded-lg justify-center px-6 text-gray-800
      dark:text-gray-100 duration-300 font-semibold focus:ring-offset-2 dark:ring-offset-black bg-gray-100 hover:bg-gray-200
      dark:bg-gray-800 dark:hover:bg-gray-900 outline-none focus:ring-4 ring-teal-400 w-fit`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
