'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import AdminNav from '@/components/AdminNav';
import AdminAuth from '@/components/AdminAuth';

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

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

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              onClick={() => router.push('/admin/testimonials')}
              className="glass-card p-6 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-2">Testimonials</h3>
              <p className="text-slate-400">Kelola testimoni dari client</p>
            </div>

            <div 
              onClick={() => router.push('/admin/chat')}
              className="glass-card p-6 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-2">Live Chat</h3>
              <p className="text-slate-400">Kelola percakapan dengan client</p>
            </div>

            <div 
              className="glass-card p-6 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-2">Settings</h3>
              <p className="text-slate-400">Pengaturan website</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 