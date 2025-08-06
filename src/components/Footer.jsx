import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Jeumpa Auto Spray. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-indigo-300">
            Beranda
          </a>
          <a href="#about" className="hover:text-indigo-300">
            Tentang
          </a>
          <a href="#services" className="hover:text-indigo-300">
            Layanan
          </a>
          <a href="#gallery" className="hover:text-indigo-300">
            Galeri
          </a>
          <a href="#contact" className="hover:text-indigo-300">
            Kontak
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
