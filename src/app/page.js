'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  FaJs,
  FaPython,
  FaJava,
  FaPhp,
  FaDatabase,
  FaReact,
  FaVuejs,
  FaAngular,
  FaLaravel,
  FaSwift,
  FaGolang,
  FaRust,
  FaDocker,
  FaGithub,
  FaGit,
  FaNode,
  FaHtml5,
  FaCss3,
  FaSass,
  FaNpm,
  FaYarn,
  FaCode,
  FaTerminal,
  FaFire,
  FaAndroid,
  FaApple,
  FaWindows,
  FaLinux,
  FaUbuntu,
  FaServer,
  FaCloud,
  FaNetworkWired,
  FaCodeBranch,
  FaCodeCompare,
  FaCodeMerge,
  FaCodePullRequest,
  FaCodeFork
} from 'react-icons/fa6';

import {
  SiCplusplus,
  SiCsharp,
  SiKotlin,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSpring,
  SiDjango,
  SiFlutter,
  SiNextdotjs
} from 'react-icons/si';

import {
  GrMysql,
  GrOracle,
  GrSwift,
  GrAndroid,
  GrApple,
  GrWindows,
  GrUbuntu,
  GrCloudlinux,
  GrDocker,
  GrGolang,
  GrNode
} from 'react-icons/gr';

import { useState, useEffect, useRef } from 'react';
import { addChatMessage, getChatMessages, subscribeToChatMessages } from '@/lib/firebase';

export default function Home() {
  return (
    <div className="min-h-screen font-[var(--font-montserrat)]">
      <ChatButton />
      <WhatsAppButton />
      {/* Hero Section */}
      <section className="py-20 dark-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 md:left-40 w-72 h-72 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 md:right-40 w-72 h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <AnimatedSection className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[var(--font-space)] bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                  Stuck Ngoding? <br/>
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Santuy Aja!</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed font-[var(--font-poppins)]">
                  JogasTI siap bantuin lu beresin tugas programming, database, atau 
                  project IT apapun. <span className="font-semibold text-amber-400">Auto ACC</span> dosen dijamin!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <Link 
                    href="/layanan" 
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-[var(--font-space)] text-base font-semibold tracking-wide text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                    <span className="relative flex items-center gap-2">
                      Gas Order!
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                      </svg>
                    </span>
                  </Link>
                  <Link 
                    href="/chat" 
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-[var(--font-space)] text-base font-semibold tracking-wide text-amber-400 glass-card"
                  >
                    <span className="relative flex items-center gap-2">
                      Chat Dulu
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
                <Image
                  src="/undraw_dev-productivity_5wps.svg"
                  alt="Programming Illustration"
                  width={600}
                  height={600}
                  priority
                  className="relative z-10 hover:scale-105 transition duration-500 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 dark-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 sm:p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-slate-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 dark-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space)] text-slate-100 flex items-center justify-center gap-4">
              Tech Stack Yang Kita Kuasain
              <svg className="w-10 h-10 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </h2>
            <p className="text-xl text-slate-300 font-[var(--font-poppins)]">
              Lu butuh bantuan pake teknologi apa? Kita jago semuanya!
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {techCategories.map((category, idx) => (
              <AnimatedSection
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`relative group ${!category.isAvailable ? 'opacity-75' : ''}`}
              >
                {/* Card Header */}
                <div className="glass-card p-6 mb-4 rounded-2xl flex items-center gap-4 transition-all duration-300 group-hover:translate-y-2">
                  {category.icon}
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold font-[var(--font-space)] text-slate-100">
                      {category.title}
                    </h3>
                    {!category.isAvailable && (
                      <span className="text-sm text-amber-400 font-medium mt-1">
                        {category.comingSoonLabel}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Tech Pills Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>
                  <div className="relative glass-card p-6 rounded-2xl">
                    {category.isAvailable ? (
                      <div className="flex flex-wrap gap-3">
                        {category.techs.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-slate-800/80 text-amber-400 rounded-xl font-medium text-sm border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800 cursor-pointer shadow-lg flex items-center gap-2"
                          >
                            {getTechIcon(tech)}
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-slate-400 text-sm">
                          This service will be available soon. Stay tuned!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-72 h-72 bg-amber-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-20 dark-section relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-[var(--font-space)] text-slate-100">
              Harga Jasa
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-[var(--font-poppins)]">
              Pilih paket sesuai kebutuhan kamu!
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 sm:p-8 rounded-2xl relative ${
                  plan.popular ? 'border-2 border-amber-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 font-[var(--font-space)] text-slate-100">
                    {plan.name}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">
                    {plan.price}
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base">{plan.description}</p>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300 text-base sm:text-lg">
                      <svg className="w-5 h-5 text-amber-400 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/chat?plan=${plan.name}`}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600'
                      : 'border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10'
                  }`}
                >
                  Pilih Paket
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 sm:py-20 dark-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-[var(--font-space)] text-slate-100">
              Cara Order
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-[var(--font-poppins)]">
              Ikuti langkah-langkah berikut untuk order jasa kami
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 sm:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {index !== steps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-orange-400 hidden sm:block"></div>
                  )}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-black text-2xl font-bold font-[var(--font-space)]">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-[var(--font-space)] text-slate-100">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-300 font-[var(--font-poppins)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-[var(--font-space)] flex items-center justify-center gap-4">
              Ready To Rock?
              <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 0112 2.944a14.98 14.98 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-[var(--font-poppins)]">
              Jangan ragu buat hubungin kita. Tim expert kita siap bantuin lu kapan aja! 
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/layanan"
                className="px-6 py-3 bg-white text-amber-500 rounded-xl font-bold text-base hover:bg-gray-50 transition-colors duration-300 hover:scale-105 transform"
              >
                Lihat Layanan
              </Link>
              <Link
                href="/chat"
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold text-base hover:bg-white/10 transition-colors duration-300 hover:scale-105 transform"
              >
                Chat Admin
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 dark-section border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="JogasTI Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold text-slate-100 font-[var(--font-space)]">
                  JogasTI
                </span>
              </Link>
              <p className="text-slate-300 text-base sm:text-lg mb-6 font-[var(--font-poppins)]">
                Jasa pengerjaan tugas IT terpercaya dengan garansi revisi sampai ACC!
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-100 font-[var(--font-space)]">
                Layanan
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={`/layanan#${service.id}`}
                      className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-[var(--font-poppins)]"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-100 font-[var(--font-space)]">
                Tautan
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-[var(--font-poppins)]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-100 font-[var(--font-space)]">
                Kontak
              </h3>
              <ul className="space-y-3">
                {contacts.map((contact, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-amber-400">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 font-[var(--font-poppins)]">
                        {contact.label}
                      </div>
                      <Link
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-[var(--font-poppins)]"
                      >
                        {contact.value}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm sm:text-base font-[var(--font-poppins)]">
              © {new Date().getFullYear()} JogasTI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const WhatsAppButton = () => (
  <Link
    href="https://wa.me/+62895329824943" 
    target="_blank"
    className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
    aria-label="Chat on WhatsApp"
  >
    <svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  </Link>
);

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isNameSubmitted && name) {
      // Subscribe to chat messages for this specific user
      const unsubscribe = subscribeToChatMessages(name, (updatedMessages) => {
        setMessages(updatedMessages);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, [isNameSubmitted, name]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setIsNameSubmitted(true);
      // Kirim pesan selamat datang
      addChatMessage({
        name: name,
        text: `Halo ${name}! 👋 Selamat datang di JogasTI. Admin akan segera menanggapi pesanmu. Silakan tinggalkan pesan!`,
        isBot: true
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      try {
        await addChatMessage({
          name,
          text: message,
          timestamp: new Date(),
        });
        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-full shadow-lg hover:from-amber-600 hover:to-orange-600 transform transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce"
        aria-label="Open Chat"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="fixed bottom-40 right-8 z-50 w-72 bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-amber-500/20 transform transition-all duration-300 animate-fade-in"
          style={{
            animation: 'slideIn 0.3s ease-out',
            '@keyframes slideIn': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)'
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)'
              }
            }
          }}
        >
          <div className="p-3 border-b border-amber-500/20 flex justify-between items-center">
            <h3 className="text-base font-semibold text-amber-400 font-[var(--font-space)]">Live Chat</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {!isNameSubmitted ? (
            <div className="p-4">
              <div className="text-center mb-4">
                <p className="text-slate-300 text-sm mb-2">Sebelum mulai chat, perkenalkan diri kamu dulu ya! 😊</p>
              </div>
              <form onSubmit={handleNameSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Masukkan nama kamu..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm font-medium"
                >
                  Mulai Chat
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className="h-80 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-amber-500/20 scrollbar-track-slate-800/50">
                {messages.length === 0 ? (
                  <div className="text-center text-slate-400 py-8 text-sm">
                    Belum ada pesan. Mulai chat sekarang!
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex flex-col space-y-1 animate-fade-in ${msg.isBot ? 'opacity-80' : ''}`}
                    >
                      <span className={`text-xs font-semibold ${msg.isBot ? 'text-green-400' : 'text-amber-400'}`}>
                        {msg.name}
                      </span>
                      <div className={`p-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 transition-colors ${
                        msg.isBot ? 'bg-slate-800/50' : 'bg-slate-800/80'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSubmit} className="p-3 border-t border-amber-500/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ketik pesan..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-3 py-1.5 bg-slate-800/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="p-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!message.trim()}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

const features = [
  {
    icon: <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Auto Kilat ⚡",
    description: "Deadline coding besok? Santuy, kita kerjain secepet compile-time, clean code pasti!"
  },
  {
    icon: <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Joki Pro 💪",
    description: "Tim kami isinya programmer handal yang udah expert di berbagai bahasa programming!"
  },
  {
    icon: <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>,
    title: "Support 24/7 📱",
    description: "Error malam-malam? Tenang, tim developer kita stand by 24/7 buat bantuin!"
  }
];

const webTechStack = [
  "HTML/CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js",
  "Angular", "Tailwind CSS", "Bootstrap", "PHP", "Laravel", "CodeIgniter"
];

const backendTechStack = [
  "Node.js", "Express.js", "Python", "Django", "Flask",
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase",
  "REST API", "GraphQL", "Docker"
];

const mobileTechStack = [
  "React Native", "Flutter", "Android (Java/Kotlin)",
  "iOS (Swift)", "Ionic", "Xamarin"
];

const dataScienceTechStack = [
  "Python", "R", "TensorFlow", "PyTorch", "Scikit-learn",
  "Pandas", "NumPy", "Machine Learning", "Data Mining",
  "Computer Vision", "NLP"
];

const stats = [
  {
    title: "Web Development",
    value: "Full Stack",
    description: "HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB"
  },
  {
    title: "Mobile Development",
    value: "Coming Soon",
    description: "Stay tuned for our mobile development services"
  },
  {
    title: "Data & AI",
    value: "Coming Soon", 
    description: "Stay tuned for our data science & AI services"
  }
];

const techCategories = [
  {
    icon: <svg className="w-8 h-8 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>,
    title: "Programming & Web",
    techs: webTechStack,
    isAvailable: true
  },
  {
    icon: <svg className="w-8 h-8 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>,
    title: "Database & Backend",
    techs: backendTechStack,
    isAvailable: true
  },
  {
    icon: <svg className="w-8 h-8 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>,
    title: "Mobile Development",
    techs: mobileTechStack,
    isAvailable: false,
    comingSoonLabel: "Coming Soon!"
  },
  {
    icon: <svg className="w-8 h-8 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>,
    title: "Data & AI",
    techs: dataScienceTechStack,
    isAvailable: false,
    comingSoonLabel: "Coming Soon!"
  }
];

const pricingPlans = [
  {
    name: "Basic",
    price: "Mulai 99K",
    features: [
      "Tugas Kecil - Menengah",
      "Revisi 1x",
      "Waktu Pengerjaan 1-2 Hari",
      "Chat Support"
    ]
  },
  {
    name: "Popular",
    price: "Mulai 199K",
    featured: true,
    features: [
      "Tugas Besar/Kompleks",
      "Revisi 3x",
      "Waktu Pengerjaan 3-7 Hari",
      "Priority Support",
      "Source Code + Documentation"
    ]
  },
  {
    name: "Premium",
    price: "Custom",
    features: [
      "Project Skripsi/TA",
      "Revisi Unlimited",
      "Timeline Fleksibel",
      "24/7 Priority Support",
      "Full Documentation"
    ]
  }
];

const steps = [
  {
    title: "Chat Admin",
    description: "Jelasin detail tugas lu ke admin kita yang ramah dan fast response"
  },
  {
    title: "Deal & DP",
    description: "Nego harga sampe deal, bayar DP, dan kita mulai kerjain"
  },
  {
    title: "Revisi & Selesai",
    description: "Revisi sampe lu puas, bayar sisanya, dan tugas kelar deh!"
  }
];

function getTechIcon(tech) {
  const iconClass = "w-4 h-4"; 
  switch (tech.toLowerCase()) {
    // Frontend & Web
    case 'html/css':
      return <FaHtml5 className={`${iconClass} text-orange-500`} />;
    case 'javascript':
      return <FaJs className={`${iconClass} text-yellow-400`} />;
    case 'typescript':
      return <SiTypescript className={`${iconClass} text-blue-600`} />;
    case 'react.js':
      return <FaReact className={`${iconClass} text-cyan-400`} />;
    case 'next.js':
      return <SiNextdotjs className={`${iconClass} text-white`} />;
    case 'vue.js':
      return <FaVuejs className={`${iconClass} text-emerald-500`} />;
    case 'angular':
      return <FaAngular className={`${iconClass} text-red-600`} />;
    case 'tailwind css':
      return <svg className={iconClass} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="#38bdf8" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"/>
      </svg>;
    case 'bootstrap':
      return <svg className={iconClass} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="#7952b3" d="M26.667 0H5.334A5.334 5.334 0 0 0 0 5.334v21.332A5.334 5.334 0 0 0 5.334 32h21.333A5.334 5.334 0 0 0 32 26.666V5.334A5.334 5.334 0 0 0 26.667 0z"/>
        <path fill="#fff" d="M22.256 14.168c.512-1.208.384-2.496-.384-3.456-.768-1.024-2.048-1.536-3.84-1.536h-7.04v13.632h7.04c1.792 0 3.072-.512 3.84-1.536.768-.96.896-2.24.384-3.456-.256-.576-.64-1.024-1.024-1.152-2.048-1.48-2.346zm-8.64-2.368h4.096c1.024 0 1.792.256 2.048.768.256.512.256 1.024 0 1.536-.256.512-1.024.768-2.048.768h-4.096v-3.072zm4.096 8.448h-4.096v-3.072h4.096c1.024 0 1.792.256 2.048.768.256.512.256 1.024 0 1.536-.256.512-1.024.768-2.048.768-2.048.768.768.768.768.768.768.768.768.768.768.768.768.768.768.768.768.768z"/>
      </svg>;
    case 'php':
      return <FaPhp className={`${iconClass} text-indigo-600`} />;
    case 'laravel':
      return <FaLaravel className={`${iconClass} text-red-500`} />;

    // Backend & Databases
    case 'node.js':
      return <FaNode className={`${iconClass} text-green-600`} />;
    case 'express.js':
      return <svg className={`${iconClass} text-gray-100`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.53.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/>
      </svg>;
    case 'python':
      return <FaPython className={`${iconClass} text-blue-500`} />;
    case 'django':
      return <svg className={`${iconClass} text-green-800`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M14.135.043H20.4v23.324c-1.63.305-2.83.426-4.13.426-3.884 0-5.896-1.756-5.896-5.128 0-3.25 2.16-5.35 5.5-5.35.52 0 .914.04 1.26.16zm0 11.84c-.353-.118-.648-.157-1.02-.157-1.528 0-2.41 1.57-2.41 3.648 0 2.027.842 3.138 2.37 3.138 1.532 0 2.486-1.374 2.486-4.2 0-2.12-.974-3.533-2.466-3.533z"/>
      </svg>;
    case 'flask':
      return <svg className={`${iconClass} text-gray-200`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M9.563 8.46L13.437 8.46 13.437 3.627 9.563 3.627 9.563 8.46z"/>
        <path fill="currentColor" d="M28.86 24.507l-10.969-16.46v-4.42h1.145a.813.813 0 0 0 0-1.627h-5.073a.813.813 0 0 0 0 1.627h1.145v4.42L4.14 24.507a2.967 2.967 0 0 0 2.483 4.613h19.753a2.967 2.967 0 0 0 2.483-4.613zM6.344 26.847a1.34 1.34 0 0 1-1.12-2.08L9.563 10.087h3.874l4.339 14.68h-11.432z"/>
      </svg>;
    case 'mysql':
      return <SiMysql className={`${iconClass} text-blue-500`} />;
    case 'postgresql':
      return <SiPostgresql className={`${iconClass} text-blue-600`} />;
    case 'mongodb':
      return <SiMongodb className={`${iconClass} text-green-500`} />;
    case 'redis':
      return <svg className={`${iconClass} text-red-500`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M32 11.984c0-.12-.072-.216-.192-.264l-5.736-2.424-3.936-1.608L15.72 5.64l-2.832-1.176-5.76-2.376c-.072-.024-.144-.024-.216 0l-6.72 2.76C.072 4.896 0 4.992 0 5.112v6.24c0 .12.072.216.216.216.216.192.264l5.736 2.424 3.936 1.608 6.408 2.64 2.832 1.176 5.76 2.376c.072.024.144.024.216 0l6.72-2.76c.12-.048.192-.144.192-.264v-6.24z"/>
      </svg>;
    case 'firebase':
      return <SiFirebase className={`${iconClass} text-yellow-500`} />;

    // Mobile Development
    case 'react native':
      return <FaReact className={`${iconClass} text-cyan-400`} />;
    case 'flutter':
      return <SiFlutter className={`${iconClass} text-blue-400`} />;
    case 'android (java/kotlin)':
      return <FaAndroid className={`${iconClass} text-green-500`} />;
    case 'ios (swift)':
      return <FaApple className={`${iconClass} text-gray-100`} />;

    // AI & Data Science
    case 'tensorflow':
      return <svg className={`${iconClass} text-orange-500`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M26.135 16.762L19.34 13.09v7.326l6.795-3.654zm.252 2.35l-7.047 3.792v-7.326l7.047 3.534zm-14.866-9.39L4.726 13.37l6.795 3.672V9.722zm-.252 7.584L4.222 13.77l7.047-3.792v7.326zm7.433-3.792l-6.795 3.654 6.795 3.672v-7.326zm.252 7.584l-7.047-3.534 7.047-3.792v7.326z"/>
      </svg>;
    case 'pytorch':
      return <svg className={`${iconClass} text-red-500`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M21.856 13.515a2.404 2.404 0 1 1-4.808 0 2.404 2.404 0 0 1 4.808 0zm6.51 5.497l-6.01-10.404L4.343 19.012l6.01 10.404 18.013-10.404zM12.877 9.757l6.01-3.47-6.01-3.47L6.867 6.287l6.01 3.47z"/>
      </svg>;
    case 'scikit-learn':
      return <svg className={`${iconClass} text-orange-500`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M16 0C7.175 0 0 7.175 0zm0 28.444C9.364 28.444 4 23.08 4 16.444S9.364 4.444 16 4.444s12 5.364 12 12-5.364 12-12 12z"/>
      </svg>;
    case 'codeigniter':
      return <svg className={`${iconClass} text-red-500`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 2.8c6.188 0 11.2 5.012 11.2 11.2S22.188 27.2 16 27.2 4.8 22.188 4.8 16 9.812 4.8 16 4.8zm-.056 4.2c-3.864 0-7 3.136-7 7s3.136 7 7 7c3.864 0 7-3.136 7-7s-3.136-7-7-7zm0 2.8c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2c-2.32 0-4.2-1.88-4.2-4.2s1.88-4.2 4.2-4.2z"/>
      </svg>;
    case 'graphql':
      return <svg className={`${iconClass} text-pink-500`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M16 2l13.856 8v12L16 30 2.144 22V10L16 2zm0 0v-8" />
      </svg>;
    case 'docker':
      return <FaDocker className={`${iconClass} text-blue-400`} />;
    case 'rest api':
      return <svg className={`${iconClass} text-green-500`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>;

    // Default icon for others
    default:
      return <FaCode className={`${iconClass} text-amber-400`} />;
  }
};

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

const socialLinks = [
  {
    icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>,
    url: 'https://wa.me/+62895329824943'
  },
  {
    icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.151 6.534c.732-.22 1.41-.22 2.139 0 .429.256.512.256 1.024 0 1.536-.256.512-1.024.768-2.048.768h-4.096v-3.072zm4.096 8.448h-4.096v-3.072h4.096c1.024 0 1.792.256 2.048.768.256.512.256 1.024 0 1.536-.256.512-1.024.768-2.048.768-2.048.768.768.768.768.768.768.768.768.768.768.768.768.768.768.768.768.768z"/>
    </svg>,
    url: 'https://instagram.com/jogasti'
  }
];

const contacts = [
  {
    icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.208-1.407L12 21.75 5.25 4.533a2.25 2.25 0 00-1.208-1.407v-1.371c0-.555.351-1.005.852-1.207.504L2.25 6.75zM12 12a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z" />
    </svg>,
    label: 'WhatsApp',
    value: '+62 895-3298-24943',
    url: 'https://wa.me/+62895329824943'
  },
  {
    icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 003 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3 12.077V6.75" />
    </svg>,
    label: 'Email',
    value: 'kikyrestunov@gmail.com',
    url: 'mailto:kikyrestunov@gmail.com'
  }
];

const links = [
  { name: 'Beranda', url: '/' },
  { name: 'Layanan', url: '/layanan' },
  { name: 'Testimoni', url: '/testimoni' },
  { name: 'FAQ', url: '/faq' }
];

const services = [
  { id: 'programming', name: 'Joki Programming' },
  { id: 'database', name: 'Joki Database' },
  { id: 'web', name: 'Joki Web Development' },
  { id: 'mobile', name: 'Joki Mobile App' },
  { id: 'desktop', name: 'Joki Desktop App' }
];
