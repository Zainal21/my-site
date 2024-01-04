const Border: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex w-fit border duration-300 border-teal-100 dark:border-teal-900 rounded-full">
      {children}
    </div>
  );
};

export default Border;
