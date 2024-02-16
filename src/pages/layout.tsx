import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/navbar";

const Layout = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
