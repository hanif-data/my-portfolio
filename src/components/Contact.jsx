import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100 text-gray-800">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-indigo-700">Hubungi Kami</h2>
        <p className="text-lg text-gray-600 mt-2">
          Silakan isi form atau hubungi kami langsung untuk konsultasi dan
          reservasi.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Kontak */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <div>
            <h3 className="font-semibold">Alamat:</h3>
            <p>Jl. Jeumpa No. 10, Banda Aceh</p>
          </div>
          <div>
            <h3 className="font-semibold">Telepon:</h3>
            <p>0812-3456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p>jeumpa.autospray@gmail.com</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            const whatsappNumber = "6281234567890"; // ← Ganti dengan nomor kamu (tanpa +)
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Halo, saya ${name} (${email}) ingin bertanya: ${message}`
            )}`;

            window.open(url, "_blank");
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="w-full p-3 border border-gray-300 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
          />

          <textarea
            name="message"
            placeholder="Pesan"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded"></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
            Kirim Pesan
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
