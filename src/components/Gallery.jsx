import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="py-16 px-4 bg-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-indigo-700">Galeri Kami</h2>
        <p className="text-lg text-gray-600 mt-2">
          Hasil pekerjaan terbaik kami untuk pelanggan di Banda Aceh.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  );
};

export default Gallery;
