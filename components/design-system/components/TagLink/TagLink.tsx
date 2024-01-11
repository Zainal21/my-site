import Link from "next/link";

interface TagLinkProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
}

const TagLink: React.FC<TagLinkProps> = ({
  href,
  children,
  style,
  target,
  onClick,
}) => {
  return (
    <Link
      className={`font-bold focus:ring-offset-2 dark:ring-offset-black rounded inline-flex items-center w-fit text-[#10161a}]
      hover:underline focus:ring-4 ring-[#10161a}] outline-none duration-300 font-bold`}
      style={style}
      target={target}
      href={href}
      onClick={onClick}
      rel="noreferrer"
    >
      {children}
    </Link>
  );
};

export default TagLink;
