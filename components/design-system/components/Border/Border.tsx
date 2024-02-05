interface BorderProps {
  children?: React.ReactNode;
}

const Border: React.FC<BorderProps> = ({ children }) => {
  return (
    <div className="flex w-fit  border-4 duration-300 border-teal-200 dark:border-teal-600 rounded-full">
      {children}
    </div>
  );
};

export default Border;
