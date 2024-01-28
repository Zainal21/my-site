import { NavbarSection, FooterSection } from "@/components/modules";

export const HomePageLayout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full">
      <div className="flex flex-col h-full w-[80%] md:w-[40rem] mt-12">
        <NavbarSection />
        <main className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 sm:mt-16 mt-20">
          {children}
        </main>
        <FooterSection />
      </div>
    </div>
  );
};
