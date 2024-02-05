interface BorderProps {
  children?: React.ReactNode;
}

const Border: React.FC<BorderProps> = ({ children }) => {
  return (
    <div className="flex w-fit  border-4 duration-300 border-teal-200 dark:border-teal-200 rounded-full shadow-[0_0_1px_#fff,inset_0_0_2px_#fff,0_0_1px_#99f6e3,0_0_10px_#99f6e3,0_0_30px_#99f6e3]">
      {children}
    </div>
  );
};

export default Border;
