import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Jeumpa Auto Spray</h1>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Beranda
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                Tentang
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500">
                Layanan
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-500">
                Galeri
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
