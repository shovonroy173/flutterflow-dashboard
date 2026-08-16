import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Sidebar/Header";
import { Drawer } from "antd";

const MainLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#07090E] text-slate-100">
      {/* Desktop Fixed Sidebar */}
      <div className="fixed top-0 left-0 z-30 hidden h-full w-72 lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        placement="left"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={280}
        styles={{ body: { padding: 0, backgroundColor: "#0B0F19" } }}
      >
        <Sidebar closeDrawer={() => setOpenDrawer(false)} />
      </Drawer>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full lg:ml-72 min-w-0">
        {/* Header Bar */}
        <Header showDrawer={() => setOpenDrawer(true)} />

        {/* Dynamic Outlet with Custom Futuristic Backdrop */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-gradient-to-b from-[#07090E] via-[#0B0F19] to-[#07090E]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
