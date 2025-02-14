'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaComments, FaStar, FaChartLine } from 'react-icons/fa';
import { getTestimonials, getChatRooms } from '@/lib/firebase';
import AdminNav from '@/components/AdminNav';
import AdminAuth from '@/components/AdminAuth';
import { useAuth } from '@/context/AuthContext';

export default function AdminPage() {
  const { user, loading } = useAuth();
  const [stats, setStats] = useState({
    totalTestimonials: 0,
    averageRating: 0,
    activeChats: 0,
    pendingResponses: 0
  });

  // Show loading state
  if (loading) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-slate-400">Loading...</div>
    </div>;
  }

  // Protected route
  if (!user) {
    return <AdminAuth />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <AdminNav />
      
      <main className="fixed inset-0 top-16 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-100 font-[var(--font-space)]">
              Dashboard
            </h1>
            <p className="text-slate-400 mt-1">
              Overview dan kontrol panel website
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Total Testimoni</p>
                  <h3 className="text-2xl font-bold text-slate-100 mt-1">
                    {stats.totalTestimonials}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <FaUsers className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Rating Rata-rata</p>
                  <h3 className="text-2xl font-bold text-slate-100 mt-1">
                    {stats.averageRating.toFixed(1)}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <FaStar className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Chat Aktif</p>
                  <h3 className="text-2xl font-bold text-slate-100 mt-1">
                    {stats.activeChats}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <FaComments className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Perlu Respon</p>
                  <h3 className="text-2xl font-bold text-slate-100 mt-1">
                    {stats.pendingResponses}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <FaChartLine className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-slate-100 mb-4">
                Testimoni Terbaru
              </h2>
              <div className="space-y-4">
                {/* Will be populated with actual data */}
                <p className="text-slate-400 text-sm">Loading testimonials...</p>
              </div>
            </motion.div>

            {/* Active Chats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-slate-100 mb-4">
                Chat Aktif
              </h2>
              <div className="space-y-4">
                {/* Will be populated with actual data */}
                <p className="text-slate-400 text-sm">Loading active chats...</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
} 