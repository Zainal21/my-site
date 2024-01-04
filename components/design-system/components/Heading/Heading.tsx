export interface HeadingProps {
  children?: React.ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
}

const Heading: React.FC<HeadingProps> = ({ className, children, style }) => {
  return (
    <h1
      className={`text-4xl font-bold mb-6 dark:text-white ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
};

export default Heading;
