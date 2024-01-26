import Link from "next/link";
import { Menu } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { NavItemType } from "@/types/navbar";

const DropdownNav: React.FC<{ items: NavItemType[] }> = ({ items }) => {
  return (
    <div className="flex relative items-center justify-center">
      <Menu>
        <Menu.Button className="focus:ring-4 ring-[#10161a] focus:ring-offset-2 dark:ring-offset-black rounded outline-none duration-300">
          <FiMenu className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-800 dark:hover:text-gray-100 duration-300" />
        </Menu.Button>
        <Menu.Items>
          <div className="flex flex-col absolute top-8 w-36 text-sm justify-between left-0 py-2  rounded-lg bg-white border border-teal-100 dark:bg-[#10161a]/100 dark:border-teal-900">
            {items?.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link
                    className={`p-2 px-3 text-gray-600 dark:text-gray-300 ${
                      active
                        ? "bg-[#10161a] dark:bg-[#10161a] duration-300 text-gray-100"
                        : " "
                    }`}
                    href={item.to}
                  >
                    {item.dropdown ? item.dropdown : item.text}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropdownNav;
