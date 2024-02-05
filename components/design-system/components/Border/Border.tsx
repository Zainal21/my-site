interface BorderProps {
  children?: React.ReactNode;
}

const Border: React.FC<BorderProps> = ({ children }) => {
  return (
    <div className="flex w-fit  border-4 duration-300 border-teal-200 dark:border-teal-600 rounded-full  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
      {children}
    </div>
  );
};

export default Border;
