'use client';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaBook, FaGithub, FaRocket, FaHeadset } from 'react-icons/fa';
import { HiDocumentText, HiVideoCamera, HiLockClosed, HiSparkles } from 'react-icons/hi';
import Link from 'next/link';

export default function LayananPage() {
  return (
    <div className="min-h-screen pt-20 font-[var(--font-montserrat)]">
      {/* Hero Section */}
      <section className="py-20 dark-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-40 w-72 h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-space)] bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              Jasa Joki Tugas
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-[var(--font-poppins)]">
              Solusi terpercaya untuk tugas kuliah & akademik dengan hasil berkualitas dan tepat waktu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 dark-section relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl relative group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-300"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 transform rotate-3 group-hover:rotate-6 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-[var(--font-space)] text-slate-100">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 font-[var(--font-poppins)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 dark-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space)] text-slate-100">
              What You'll Get
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-[var(--font-poppins)]">
              Semua yang kamu butuhkan untuk project yang sempurna
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-amber-400 text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-[var(--font-space)] text-slate-100">
                  {item.title}
                </h3>
                <p className="text-slate-300 font-[var(--font-poppins)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 dark-section relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space)] text-slate-100">
              Quality Guarantee
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-[var(--font-poppins)]">
              Standar kualitas tinggi untuk setiap project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {qualityPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="text-amber-400 text-2xl mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-[var(--font-space)] text-slate-100">
                  {point.title}
                </h3>
                <p className="text-slate-300 font-[var(--font-poppins)]">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 dark-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space)] text-slate-100">
              FAQ
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-[var(--font-poppins)]">
              Pertanyaan yang sering ditanyakan
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <h3 className="text-lg font-bold mb-3 font-[var(--font-space)] text-slate-100">
                  {faq.question}
                </h3>
                <p className="text-slate-300 font-[var(--font-poppins)]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space)] text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-[var(--font-poppins)]">
              Tim expert kami siap membantu mewujudkan projectmu
            </p>
            <Link 
              href="https://wa.me/+62895329824943"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-500 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Chat di WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const workflowSteps = [
  {
    icon: <FaCode />,
    title: "Analisis Tugas",
    description: "Review detail tugas dan memberikan estimasi waktu pengerjaan & biaya yang sesuai"
  },
  {
    icon: <FaDatabase />,
    title: "Research",
    description: "Riset mendalam untuk memahami topik dan mengumpulkan referensi yang berkualitas"
  },
  {
    icon: <FaRocket />,
    title: "Pengerjaan",
    description: "Proses pengerjaan dengan teliti dan sesuai dengan format yang diminta"
  },
  {
    icon: <HiSparkles />,
    title: "Review",
    description: "Pengecekan ulang untuk memastikan semua poin terpenuhi dengan baik"
  },
  {
    icon: <FaGithub />,
    title: "Revisi",
    description: "Free revisi sesuai paket yang dipilih untuk hasil yang maksimal"
  },
  {
    icon: <FaHeadset />,
    title: "Support",
    description: "Konsultasi gratis untuk membantu memahami hasil pengerjaan"
  }
];

const deliverables = [
  {
    icon: <HiDocumentText />,
    title: "File Lengkap",
    description: "File tugas dalam format yang diminta (docx, pdf, ppt, dll)"
  },
  {
    icon: <FaBook />,
    title: "Referensi",
    description: "Daftar referensi & sumber yang digunakan dalam pengerjaan"
  },
  {
    icon: <HiDocumentText />,
    title: "Laporan",
    description: "Laporan pengerjaan & penjelasan detail jika diperlukan"
  },
  {
    icon: <HiVideoCamera />,
    title: "Video Penjelasan",
    description: "Video penjelasan hasil pengerjaan (opsional)"
  },
  {
    icon: <FaDatabase />,
    title: "Source File",
    description: "File mentah/source code untuk tugas pemrograman"
  },
  {
    icon: <FaHeadset />,
    title: "Konsultasi",
    description: "Konsultasi gratis untuk memahami hasil pengerjaan"
  }
];

const qualityPoints = [
  {
    icon: <FaBook />,
    title: "Original",
    description: "Hasil pengerjaan original & bebas plagiarisme"
  },
  {
    icon: <HiDocumentText />,
    title: "Terstruktur",
    description: "Penulisan terstruktur & sesuai format yang diminta"
  },
  {
    icon: <FaRocket />,
    title: "Tepat Waktu",
    description: "Pengerjaan selesai sesuai deadline yang disepakati"
  },
  {
    icon: <HiSparkles />,
    title: "Berkualitas",
    description: "Hasil berkualitas dengan referensi terpercaya"
  },
  {
    icon: <HiLockClosed />,
    title: "Privasi",
    description: "Privasi & kerahasiaan client terjamin"
  },
  {
    icon: <FaHeadset />,
    title: "Support",
    description: "Support responsif dari tim expert"
  }
];

const faqs = [
  {
    question: "Berapa lama proses pengerjaan?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas tugas. Simple task 1-2 hari, medium 3-5 hari, complex 1 minggu atau lebih. Timeline detail akan diberikan setelah analisis tugas."
  },
  {
    question: "Apakah bisa revisi?",
    answer: "Ya, jumlah revisi disesuaikan dengan paket yang dipilih. Basic 1x revisi, Popular 3x revisi, Premium unlimited revisi selama masa pengerjaan."
  },
  {
    question: "Apakah hasil dijamin original?",
    answer: "Ya, kami menjamin hasil pengerjaan 100% original dan bebas plagiarisme. Setiap tugas dikerjakan dari nol sesuai requirement yang diberikan."
  },
  {
    question: "Bagaimana sistem pembayaran?",
    answer: "Pembayaran dilakukan dalam 2 tahap: 50% di awal (DP) dan 50% setelah tugas selesai. Pembayaran bisa via transfer bank atau e-wallet."
  },
  {
    question: "Apakah ada garansi?",
    answer: "Ya, kami memberikan garansi revisi sesuai paket yang dipilih. Jika hasil tidak sesuai dengan requirement, kami akan revisi sampai sesuai."
  }
]; 