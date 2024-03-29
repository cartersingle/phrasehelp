import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/navbar";

const Layout = () => {
  return (
    <div className="min-h-screen h-full pt-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
