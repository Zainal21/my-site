import Link from "next/link";

interface LinkProps {
  href?: string | undefined;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  title?: string | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
}

const LinkTarget: React.FC<LinkProps> = ({
  href,
  style,
  title,
  target,
  children,
  onClick,
}) => {
  return (
    <Link
      href={href || ""}
      title={title}
      className={`font-bold focus:ring-offset-2 dark:ring-offset-black rounded outline-none focus:ring-tael-600
      items-center inline-flex w-fit duration-300 cursor-pointer text-teal-600 dark:text-teal-400" hover:underline focus:ring-4`}
      onClick={onClick}
      style={style}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkTarget;
