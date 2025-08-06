import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-white text-gray-800 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Gambar kiri */}
      <motion.div
        className="max-w-md w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <img
          src="/images/bengkel.jpg"
          alt="Tentang Jeumpa Auto Spray"
          className="w-full rounded-lg shadow-md"
        />
      </motion.div>

      {/* Teks kanan */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">
          Tentang Kami
        </h2>
        <p className="text-lg leading-relaxed">
          Jeumpa Auto Spray adalah bengkel spesialis body repair dan pengecatan
          mobil profesional di Banda Aceh. Kami berdiri sejak 2010 dan
          berkomitmen untuk memberikan hasil terbaik dengan pelayanan yang
          cepat, rapi, dan bergaransi.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
