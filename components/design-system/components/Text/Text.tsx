export interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
}

const Text: React.FC<TextProps> = ({ children, style }) => {
  return (
    <p className="text-gray-600 dark:text-gray-300" style={style}>
      {children}
    </p>
  );
};

export default Text;
