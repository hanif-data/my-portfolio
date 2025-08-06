import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Tambahkan Navbar di sini nanti */}
      {children}
      {/* Tambahkan Footer di sini nanti */}
    </div>
  );
};

export default MainLayout;
