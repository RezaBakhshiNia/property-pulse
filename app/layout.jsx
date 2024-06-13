import Head from "next/head";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "خونمون | خونه جدید با خونمون",
  description: "با خونمون، خونه بهتری اجاره کنید",
  keywords: "اجاره، رهن، پیدا کردن خونه",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body id="body">
        <Navbar />
        <main className="root">{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
