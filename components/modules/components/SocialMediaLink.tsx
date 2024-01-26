import Link from "next/link";

import { links } from "@/data/links";

const SocialMediaLink: React.FC = () => {
  return (
    <div className="flex">
      {links?.map((link) => (
        <LinkWrapper key={link.id} href={link.href} title={link.title}>
          {link.icon}
        </LinkWrapper>
      ))}
    </div>
  );
};

interface LinkWrapperProps {
  children?: React.ReactNode;
  title: string;
  href: string;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ href, children, title }) => {
  return (
    <Link
      href={href}
      className={`text-2xl duration-300 focus:ring-4 focus:ring-offset-4 dark:ring-offset-black rounded
      ring-teal-400 outline-none cursor-pointer mr-6 hover:text-gray-800 dark:hover:text-gray-100 text-gray-600
      dark:text-gray-300 hover:scale-110`}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  );
};

export default SocialMediaLink;
