import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
// import Samim from '@/assets/fonts/Samim.woff';
// import SamimBold from '@/assets/fonts/Samim-Bold.woff';

// Font files can be colocated inside of `app`
const samim = localFont({
  src: [
    {
      path: "../assets/fonts/Samim-Bold.woff",
      weight: "400",
      style: "bold",
    },
    {
      path: "../assets/fonts/Samim.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "خونمون | خونه جدید با خونمون",
  description: "با خونمون، خونه بهتری اجاره کنید",
  keywords: "اجاره، رهن، پیدا کردن خونه",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl" className={samim.className}>
      <body id="body" className={samim.className}>
        <Navbar />
        <main className="root">{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
