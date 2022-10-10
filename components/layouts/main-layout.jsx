import Header from "../base/header";
import Footer from "../base/footer";

export default function MainLayout({ children }) {
  return (
    <div className="text-white dark:text-white ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
