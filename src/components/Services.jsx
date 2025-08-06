import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Body Repair",
    description:
      "Perbaikan kerusakan bodi mobil akibat tabrakan, penyok, dan goresan.",
    icon: "🛠️",
  },
  {
    title: "Cat Ulang",
    description:
      "Pengecatan ulang seluruh mobil atau sebagian panel dengan warna presisi.",
    icon: "🎨",
  },
  {
    title: "Poles & Detailing",
    description:
      "Pengilapan dan detailing eksterior untuk mengembalikan kilau mobil.",
    icon: "✨",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-gray-100 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-indigo-700">Layanan Kami</h2>
        <p className="text-lg text-gray-600 mt-2">
          Kami siap melayani Anda dengan profesionalisme dan kualitas terbaik.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}>
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
