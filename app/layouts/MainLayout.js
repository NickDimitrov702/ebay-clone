"use client";
import MainHeader from "./includes/MainHeader";
import SubMenu from "./includes/SubMenue";
import TopMenu from "./includes/TopMenu";
import Footer from "./includes/Footer";
export default function MainLayout({ children }) {
  return (
    <>
      <div
        id="Mainlayout"
        className="min-w-[1050px] max-w-[1300px] mx-auto border-4"
      >
        <TopMenu />
        <MainHeader />
        <SubMenu />
        {children}

        <Footer />
      </div>
    </>
  );
}
