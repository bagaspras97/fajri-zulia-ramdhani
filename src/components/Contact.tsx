import { useState, useRef } from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Configure these values with your EmailJS account information
      const serviceId = "service_s3qk8di";
      const templateId = "template_l44ti69";
      const publicKey = "DGltwIj_Ss9aTcXPP";

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current ?? '',
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Pesan berhasil terkirim! Saya akan segera menghubungi Anda kembali."
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "Gagal mengirim pesan. Silakan coba lagi nanti atau hubungi saya melalui media sosial."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback to mailto if EmailJS is not configured
  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:bagasprastyadi97@gmail.com?subject=Pesan dari ${formData.name}&body=${formData.message}`;
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(178, 132, 190, 0.3)" },
  };

  const socialLinks = [
    { icon: <FaTwitter />, url: "#", name: "Twitter" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
    { icon: <FaLinkedin />, url: "#", name: "LinkedIn" },
    { icon: <FaGithub />, url: "#", name: "GitHub" },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 relative overflow-hidden bg-white" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('path/to/pattern.svg')]"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#B284BE] to-[#D4BFE0] blur-xl opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[#B284BE] to-[#E8DCEF] blur-xl opacity-20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Hubungi Saya
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#B284BE] to-[#D4BFE0] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#B284BE] text-sm font-medium mb-2">
                  Nama
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nama lengkap Anda"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-[#B284BE]/30 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B284BE]"
                  whileFocus="focus"
                  variants={inputVariants}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#B284BE] text-sm font-medium mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-[#B284BE]/30 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B284BE]"
                  whileFocus="focus"
                  variants={inputVariants}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#B284BE] text-sm font-medium mb-2">
                  Pesan
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-[#B284BE]/30 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B284BE] min-h-32"
                  whileFocus="focus"
                  variants={inputVariants}
                  required
                ></motion.textarea>
              </div>
              
              {submitStatus.message && (
                <div 
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.type === "success" 
                      ? "bg-green-500/20 text-green-700" 
                      : "bg-red-500/20 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-[#B284BE] to-[#9A6DAA] rounded-lg text-white font-medium hover:from-[#9A6DAA] hover:to-[#805C8E] transition-all shadow-lg shadow-purple-200 disabled:opacity-70 flex-1"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </motion.button>
                
                <motion.button
                  onClick={handleMailto}
                  className="px-6 py-3 border border-[#B284BE] text-[#B284BE] rounded-lg font-medium hover:bg-[#B284BE]/10 hover:bg-opacity-10 transition-all flex-1"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Kirim via Email
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Informasi Kontak</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#B284BE]/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#B284BE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a href="mailto:bagasprastyadi97@gmail.com" className="text-gray-700 hover:text-[#B284BE] transition">
                      fajrizuliar@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#B284BE]/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#B284BE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Lokasi</p>
                    <p className="text-gray-700">Bali, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Media Sosial</h3>
              <p className="text-gray-600 mb-6">Temukan saya di platform media sosial berikut:</p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="flex items-center p-3 rounded-lg border border-[#B284BE]/30 hover:bg-[#B284BE]/10 transition group"
                    whileHover={{ y: -5, backgroundColor: "rgba(178, 132, 190, 0.1)" }}
                  >
                    <div className="text-2xl text-[#B284BE] mr-3 group-hover:text-[#9A6DAA] transition">
                      {social.icon}
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-800 transition">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}