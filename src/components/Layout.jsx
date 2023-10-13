import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="border-[#fcebd6] border-b-2 border-solid">
        <Header />
      </div>
      <main className="w-full">
        <Outlet />
      </main>
      <div className="mt-auto border-[#fcebd6] border-t-2 border-solid">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
