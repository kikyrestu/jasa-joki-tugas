'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import AdminNav from '@/components/AdminNav';
import AdminAuth from '@/components/AdminAuth';
import { getTestimonials, deleteTestimonial, updateTestimonial } from '@/lib/firebase';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function TestimonialsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [testimonials, setTestimonials] = useState([]);
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const loadTestimonials = async () => {
      if (user) {
        const data = await getTestimonials();
        setTestimonials(data);
        setFilteredTestimonials(data);
        setIsLoading(false);
      }
    };

    loadTestimonials();
  }, [user]);

  // Tampilkan loading saat mengecek auth
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  // Jika tidak login, tidak perlu render apapun karena useEffect akan redirect
  if (!user) {
    return null;
  }

  // Filter testimonials based on search query and status
  useEffect(() => {
    let filtered = testimonials;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(testimonial => 
        testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.review.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.taskType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(testimonial => testimonial.status === filterStatus);
    }

    setFilteredTestimonials(filtered);
  }, [searchQuery, filterStatus, testimonials]);

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus testimonial ini?')) {
      try {
        await deleteTestimonial(id);
        setTestimonials(prev => prev.filter(t => t.id !== id));
      } catch (error) {
        console.error('Error deleting testimonial:', error);
        alert('Gagal menghapus testimonial');
      }
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateTestimonial(id, { status: newStatus });
      setTestimonials(prev => 
        prev.map(t => t.id === id ? { ...t, status: newStatus } : t)
      );
    } catch (error) {
      console.error('Error updating testimonial status:', error);
      alert('Gagal mengubah status testimonial');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <AdminNav />
      
      <main className="fixed inset-0 top-16 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-100 font-[var(--font-space)]">
              Manajemen Testimoni
            </h1>
            <p className="text-slate-400 mt-1">
              Kelola dan moderasi testimoni dari client
            </p>
          </div>

          {/* Filters */}
          <div className="glass-card p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari testimoni..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div className="sm:w-48">
                <div className="relative">
                  <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500 appearance-none"
                  >
                    <option value="all">Semua Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials List */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center text-slate-400 py-8">Loading...</div>
            ) : filteredTestimonials.length === 0 ? (
              <div className="text-center text-slate-400 py-8">
                Tidak ada testimoni yang ditemukan
              </div>
            ) : (
              filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-slate-100 font-medium">
                            {testimonial.name}
                          </h3>
                          <div className="text-sm text-slate-400">
                            {format(testimonial.createdAt, "d MMMM yyyy 'at' HH:mm", { locale: id })}
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          testimonial.status === 'approved' ? 'bg-green-500/10 text-green-400' :
                          testimonial.status === 'rejected' ? 'bg-red-500/10 text-red-400' :
                          'bg-amber-500/10 text-amber-400'
                        }`}>
                          {testimonial.status || 'pending'}
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="text-sm font-medium text-slate-300">
                          {testimonial.taskType}
                        </div>
                        <p className="text-slate-400 text-sm mt-1">
                          {testimonial.review}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {testimonial.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex sm:flex-col gap-2 sm:border-l sm:border-slate-700/50 sm:pl-4">
                      <button
                        onClick={() => handleStatusChange(testimonial.id, 'approved')}
                        className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaCheck className="w-4 h-4" />
                        <span className="sm:hidden">Approve</span>
                      </button>
                      <button
                        onClick={() => handleStatusChange(testimonial.id, 'rejected')}
                        className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaTimes className="w-4 h-4" />
                        <span className="sm:hidden">Reject</span>
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial.id)}
                        className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-slate-500/10 text-slate-400 hover:bg-slate-500/20 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaTrash className="w-4 h-4" />
                        <span className="sm:hidden">Delete</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 