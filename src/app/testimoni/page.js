'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaClock, FaCode, FaStar, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { addTestimonial, getTestimonials, subscribeToTestimonials } from '@/lib/firebase';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function TestimoniPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    isNameHidden: false,
    taskType: '',
    framework: '',
    language: '',
    review: '',
    rating: 5,
    image: null
  });

  // Update useEffect to use subscription
  useEffect(() => {
    // Subscribe to testimonials updates
    const unsubscribe = subscribeToTestimonials((updatedTestimonials) => {
      setTestimonials(updatedTestimonials);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({...formData, image: file});
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  // Reset form function
  const resetForm = () => {
    setFormData({
      name: '',
      isNameHidden: false,
      taskType: '',
      framework: '',
      language: '',
      review: '',
      rating: 5,
      image: null
    });
    setImagePreview(null);
  };

  // Fungsi untuk memeriksa kata terlarang
  const containsBlockedKeywords = (text) => {
    const blockedKeywords = [
      // Kata dasar judi
      'judi', 'slot', 'gacor', 'togel', 'casino', 'poker', 'betting', 'gambling', 'bet',
      
      // Angka keberuntungan
      '88', '77', '99', '4d', '3d', '2d',
      
      // Istilah populer
      'jackpot', 'rtp', 'maxwin', 'scatter', 'spin', 'zeus', 'pragmatic', 'bonanza',
      'wild', 'freespin', 'mega', 'winrate', 'terpercaya', 'resmi', 'daftar', 'link alternatif',
      'deposit', 'withdraw', 'bo', 'bandar', 'agen', 'situs', 'slot online', 'live casino',
      
      // Variasi penulisan dasar
      'sl0t', 'j4di', 'g4cor', 't0gel', 'k4sino', 'p0ker', 'b3tting',
      
      // Variasi dengan simbol
      'sl*t', 'jud1', 'g@cor', 't*gel', 'c@sino', 'p*ker', 'b*tting',
      's!ot', 'jud!', 'g@c0r', 't*g*l', 'c@s!no', 'p*k*r', 'b*tt!ng',
      '$lot', 'jud!i', 'g@cor', 't)gel', 'c@$ino', 'p()ker', 'b#tting',
      
      // Variasi dengan angka
      's1ot', 'jvdi', 'gac0r', 'tog3l', 'cas1no', 'pok3r', 'b3t',
      'sl0t88', 's1ot88', 'sl88', 's88', 'j88', 'g88', 't88',
      'judii', 'juudi', 'juddi', 'judi1', 'jud!', 'j00di',
      
      // Variasi kompleks
      'togg3l', 't0g3l', 'tog31', 't0g31', 'tg1', 't0gl',
      'cas1n0', 'c4s1n0', 'c4sin0', 'c4s!no', 'csn', 'c4sn',
      'p0k3r', 'p0k4r', 'p*k*r', 'pk3r', 'pkr', 'p0kr',
      'b3tt1ng', 'b3t1ng', 'b*tt*ng', 'b3t88', 'btt', 'b3t',
      'g4c0r', 'g@c0r', 'g@cor', 'gcr', 'gc0r', 'g4cr',
      
      // Variasi maxwin dan jackpot
      'maxw1n', 'm4xw1n', 'm4xwin', 'mxwn', 'mw1n', 'm4x',
      'j@ckp0t', 'j4ckp0t', 'j4ckpot', 'jckpt', 'jp0t', 'j4kpt',
      
      // Variasi deposit dan withdraw
      'w1nr4te', 'w1nrate', 'winr4te', 'wnrt', 'wr4t',
      'depo88', 'd3po88', 'dp88', 'dp0', 'dp0st', 'd3p',
      'wd88', 'w1d88', 'withdr4w', 'wdr4w', 'wd4w',
      
      // Variasi dengan tanda baca
      'j.u.d.i', 's.l.o.t', 'g.a.c.o.r', 't.o.g.e.l',
      'j_u_d_i', 's_l_o_t', 'g_a_c_o_r', 't_o_g_e_l',
      'j-u-d-i', 's-l-o-t', 'g-a-c-o-r', 't-o-g-e-l',
      'j+u+d+i', 's+l+o+t', 'g+a+c+o+r', 't+o+g+e+l',
      
      // Variasi provider
      'pr4gmatic', 'pr4gm4t1c', 'pgsoft', 'pg_soft', 'h4b4', 'h4b4n3r0',
      'sp4de', 'sp4d3', 'spd', 'sp4d3g4m1ng', 'sp4d3_g4m1ng',
      
      // Frasa promosi
      'minimal deposit', 'bonus new member', 'bonus deposit', 'daftar sekarang',
      'link alternatif', 'anti rungkat', 'anti rungkad', 'maxwin', 'x500', 'x1000',
      
      // Kombinasi umum
      'slot gacor', 'rtp live', 'info rtp', 'pola gacor', 'jam gacor', 'gacor hari ini',
      'situs slot', 'agen slot', 'bandar togel', 'togel online', 'slot deposit'
    ];
    
    // Ubah teks menjadi lowercase untuk pencocokan yang lebih akurat
    const lowerText = text.toLowerCase();
    
    // Cek setiap kata kunci
    return blockedKeywords.some(keyword => 
      lowerText.includes(keyword.toLowerCase()) ||
      // Cek juga variasi dengan spasi atau karakter lain
      lowerText.replace(/[\s_.-]/g, '').includes(keyword.replace(/\s/g, ''))
    );
  };

  // Fungsi untuk memeriksa URL/link
  const containsUrl = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
    return urlRegex.test(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validasi kata terlarang di nama dan review
      if (containsBlockedKeywords(formData.name) || containsBlockedKeywords(formData.review)) {
        alert('Mohon maaf, konten tidak diperbolehkan mengandung kata-kata terkait perjudian atau slot.');
        setIsLoading(false);
        return;
      }

      // Validasi URL/link di review
      if (containsUrl(formData.review)) {
        alert('Mohon maaf, tidak diperbolehkan menyertakan link dalam review.');
        setIsLoading(false);
        return;
      }

      // Upload image to Cloudinary if exists
      let imageUrl = null;
      if (formData.image) {
        console.log('Uploading image...', formData.image);
        try {
          imageUrl = await uploadToCloudinary(formData.image);
          console.log('Image uploaded successfully:', imageUrl);
        } catch (uploadError) {
          console.error('Error uploading image:', uploadError);
          alert('Gagal upload gambar. Silakan coba lagi.');
          setIsLoading(false);
          return;
        }
      }

      // Prepare testimonial data
      const testimonialData = {
        name: formData.name,
        isNameHidden: formData.isNameHidden,
        taskType: formData.taskType,
        framework: formData.framework,
        language: formData.language,
        review: formData.review,
        rating: formData.rating,
        imageUrl: imageUrl,
        techStack: [formData.framework, formData.language].filter(Boolean),
        likes: 0,
        createdAt: new Date()
      };

      console.log('Sending testimonial data:', testimonialData);

      // Add to Firebase
      await addTestimonial(testimonialData);
      console.log('Testimonial added successfully');

      // Reset form & close modal
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      alert('Gagal mengirim testimoni. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  // Format relative time
  const formatRelativeTime = (date) => {
    if (!date) return '';
    return format(date, "'Dipost' d MMMM yyyy", { locale: id });
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 font-[var(--font-montserrat)]">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 dark-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-40 w-72 h-72 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-40 w-72 h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-[var(--font-space)] bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              Client Stories ✨
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 font-[var(--font-poppins)]">
              Cerita sukses dari client-client kami yang telah mempercayakan projectnya kepada tim JogasTI
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              ✍️ Bagikan Ceritamu
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative z-10 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-4 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">
                {testimonials.length}+
              </div>
              <div className="text-sm sm:text-base text-slate-300">
                Project Selesai
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-4 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">
                4.9
              </div>
              <div className="text-sm sm:text-base text-slate-300">
                Rating Rata-rata
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-4 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">
                100%
              </div>
              <div className="text-sm sm:text-base text-slate-300">
                Kepuasan Client
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-4 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">
                24/7
              </div>
              <div className="text-sm sm:text-base text-slate-300">
                Support
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Feed */}
      <section className="py-8">
        <div className="container mx-auto px-3 max-w-xl">
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-500"
              >
                <div className="p-3">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white text-base font-bold ring-2 ring-slate-700/50">
                      {testimonial.isNameHidden ? '?' : testimonial.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h3 className="text-slate-100 font-medium text-sm truncate">
                            {testimonial.isNameHidden 
                              ? testimonial.name.split(' ').map(namePart => 
                                  `${namePart[0]}${'*'.repeat(5)}`
                                ).join(' ')
                              : testimonial.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <span>{formatRelativeTime(testimonial.createdAt)}</span>
                            <span>•</span>
                            <span className="flex items-center gap-0.5">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <FaStar key={i} className="text-amber-400 w-2.5 h-2.5" />
                              ))}
                            </span>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-slate-300 transition-colors p-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="mt-1">
                        <h4 className="text-sm font-medium text-slate-200 mb-1">
                          {testimonial.taskType}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {testimonial.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-1.5 py-0.5 bg-slate-700/50 text-slate-300 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="text-slate-300 text-sm mb-3 pl-13">
                    <p className="italic">"{testimonial.review}"</p>
                  </div>

                  {/* Project Image */}
                  {testimonial.imageUrl && (
                    <div className="relative -mx-3 mb-3">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.taskType}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-4 pl-13">
                    <button className="group flex items-center gap-1.5 text-slate-400 hover:text-red-400 transition-colors">
                      <div className="p-1.5 -ml-1.5 rounded-full group-hover:bg-red-500/10">
                        <FaHeart className="w-4 h-4" />
                      </div>
                      <span className="text-xs">{testimonial.likes}</span>
                    </button>
                    <button className="group flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors">
                      <div className="p-1.5 -ml-1.5 rounded-full group-hover:bg-amber-500/10">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                      <span className="text-xs">Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 rounded-xl w-full max-w-md max-h-[85vh] sm:max-h-[90vh] border border-amber-500/20 flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-4 border-b border-slate-700">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-[var(--font-space)]">
                  ✨ Kasih Testimoni
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-200 p-1"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-3 sm:p-4 overflow-y-auto flex-1">
              <form id="testimonialForm" onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Nama
                  </label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="flex-1 px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500"
                      required
                    />
                    <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isNameHidden}
                        onChange={(e) => setFormData({...formData, isNameHidden: e.target.checked})}
                        className="rounded border-slate-600 text-amber-500 focus:ring-amber-500 bg-slate-700/50"
                      />
                      Sensor Nama
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Tugas
                  </label>
                  <input
                    type="text"
                    value={formData.taskType}
                    onChange={(e) => setFormData({...formData, taskType: e.target.value})}
                    placeholder="Contoh: Tugas Akhir, UAS, Project Semester"
                    className="w-full px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Framework
                  </label>
                  <input
                    type="text"
                    value={formData.framework}
                    onChange={(e) => setFormData({...formData, framework: e.target.value})}
                    placeholder="Contoh: Laravel, React, Next.js"
                    className="w-full px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Bahasa Pemrograman
                  </label>
                  <input
                    type="text"
                    value={formData.language}
                    onChange={(e) => setFormData({...formData, language: e.target.value})}
                    placeholder="Contoh: PHP, JavaScript, Python"
                    className="w-full px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Review
                  </label>
                  <textarea
                    value={formData.review}
                    onChange={(e) => setFormData({...formData, review: e.target.value})}
                    placeholder="Gimana pengalaman kamu pake jasa kami?"
                    className="w-full px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500 h-24 resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        onMouseEnter={() => setFormData({...formData, rating: star})}
                        className={`text-3xl transition-all duration-200 transform hover:scale-110 ${
                          formData.rating >= star ? 'text-amber-400' : 'text-slate-600'
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {formData.rating} dari 5 bintang
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Foto Project (Optional)
                  </label>
                  <div className="space-y-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-white hover:file:bg-amber-600"
                    />
                    {imagePreview && (
                      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview(null);
                            setFormData({...formData, image: null});
                          }}
                          className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-slate-700">
              <button
                type="submit"
                form="testimonialForm"
                disabled={isLoading}
                className="w-full py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white text-sm sm:text-base font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Mengirim...' : 'Kirim Testimoni ✨'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

const projects = [
  {
    title: "Sistem Informasi Perpustakaan",
    description: "Bikin sistem perpus pake Laravel + MySQL. Fiturnya ada peminjaman, pengembalian, denda, sama katalog online. Sekalian dibuatin dashboard admin yang keren 😎",
    image: "/projects/perpus.jpg",
    techStack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    duration: "4 hari",
    type: "Web App",
    rating: "5.0",
    clientName: "Dimas",
    clientUniv: "Universitas Brawijaya",
    review: "Mantep banget hasilnya! Lebih bagus dari ekspektasi, fitur-fiturnya lengkap. Dosennya sampe bilang 'ini kamu yang bikin?' 😂",
    likes: "128",
    date: "2 minggu yang lalu"
  },
  {
    title: "Website Portfolio Photographer",
    description: "Client minta dibuatin web portfolio buat foto-fotonya dia. Pake Next.js + Tailwind biar performanya mantep. Animasinya smooth pake Framer Motion 🚀",
    image: "/projects/portfolio.jpg",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    duration: "3 hari",
    type: "Frontend",
    rating: "5.0",
    clientName: "Sarah",
    clientUniv: "Universitas Indonesia",
    review: "Keren banget! Responsive di semua device, loadingnya cepet, designnya clean. Worth it banget! 👍",
    likes: "96",
    date: "3 minggu yang lalu"
  },
  {
    title: "Aplikasi POS Cafe",
    description: "Project akhir semester, bikin aplikasi POS buat cafe. Full-stack pake MERN. Ada fitur order, kitchen display, sama laporan penjualan 🍽️",
    image: "/projects/pos-cafe.jpg",
    techStack: ["React", "Express", "MongoDB", "Node.js"],
    duration: "1 minggu",
    type: "Full-Stack",
    rating: "5.0",
    clientName: "Reza",
    clientUniv: "Institut Teknologi Bandung",
    review: "Aman! Nilai akhir dapet A, aplikasinya dipake beneran sama cafe kampus 🔥",
    likes: "156",
    date: "1 bulan yang lalu"
  },
  {
    title: "Machine Learning - Image Classification",
    description: "Tugas AI, bikin model buat klasifikasi gambar pake CNN. Dataset-nya gambar buah-buahan, accuracy sampe 95% 🤖",
    image: "/projects/ml.jpg",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    duration: "5 hari",
    type: "AI/ML",
    rating: "5.0",
    clientName: "Fajar",
    clientUniv: "Universitas Gadjah Mada",
    review: "Dijelasin sampe ngerti, kodenya rapi + ada dokumentasi. Next time order lagi! 💯",
    likes: "142",
    date: "1 bulan yang lalu"
  }
]; 