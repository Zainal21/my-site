// Next.js
import { useRouter } from "next/router";
import Link from "next/link";
import { DropDownNav, ToogleNav } from "@/components/modules";
import { NavItemType } from "@/types/navbar";

export const navlinks: NavItemType[] = [
  { id: 2, text: "About", to: "/about", dropdown: "About" },
  { id: 3, text: "Projects", to: "/projects", dropdown: "Projects" },
  { id: 4, text: "Blog", to: "/blog", dropdown: "Blog" },
  { id: 4, text: "Activity", to: "/activity", dropdown: "Activity" },
  { id: 5, text: "Uses", to: "/uses", dropdown: "Uses" },
];

const NavbarSection: React.FC = () => {
  const router = useRouter();

  return (
    <nav
      className="flex px-6 top-8 fixed border bg-gray-100 dark:bg-[#10161a]/50 bg-gray-100/50 z-10 w-[80%] md:w-[40rem] border-stone-200
    dark:border-stone-900 backdrop-blur-md mb-12 rounded-lg justify-between h-14 items-center "
    >
      <div className="flex mx-4">
        <span className="text-2xl">✌️</span>
        <div className="flex flex-col justify-start">
          <Link
            className="block text-ochre text-2xl font-semibold transition-colors"
            href="/"
          >
            <span className="sr-only"></span>Zein.
          </Link>
        </div>
      </div>

      <div className="flex lg:hidden">
        <DropDownNav items={navlinks} />
      </div>
      <div className="hidden lg:flex">
        {navlinks?.map((nav) => (
          <LinkTag
            key={nav.id}
            className={`${
              router.pathname.includes(nav.to) && "dark:bg-gray-800 bg-gray-300"
            }`}
            to={nav.to}
          >
            {nav.text}
          </LinkTag>
        ))}
      </div>
      <ToogleNav />
    </nav>
  );
};

export default NavbarSection;

const LinkTag = ({
  children,
  to,
  className,
}: {
  children: React.ReactNode;
  to: string;
  className?: string | undefined;
}) => {
  return (
    <Link
      className={`mr-8 text-gray-600 focus:ring-offset-2 dark:ring-offset-black focus:ring-4 ring-teal-400
      outline-none dark:text-gray-300 text-sm duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg ${className}`}
      href={to}
    >
      {children}
    </Link>
  );
};
