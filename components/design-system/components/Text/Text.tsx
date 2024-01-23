import cn from "classnames";
export interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, style, className }) => {
  return (
    <p
      className={cn(
        "text-gray-600 dark:text-gray-300 sm:text-md text-sm",
        className
      )}
      style={style}
    >
      {children}
    </p>
  );
};

export default Text;
