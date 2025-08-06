import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-10">
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Selamat Datang di Jeumpa Auto Spray
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Spesialis body repair dan cat mobil di Banda Aceh dengan hasil rapi,
          cepat, dan bergaransi.
        </p>
        <a
          href="#contact"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-indigo-100 transition">
          Hubungi Kami
        </a>
      </motion.div>

      <motion.div
        className="max-w-sm w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <img
          src="/images/mobil.png"
          alt="Mobil"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
