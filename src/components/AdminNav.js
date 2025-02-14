'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaComments, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { logoutAdmin } from '@/lib/firebase';

export default function AdminNav() {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: FaHome },
    { href: '/admin/testimonials', label: 'Testimoni', icon: FaUsers },
    { href: '/admin/chat', label: 'Live Chat', icon: FaComments },
    { href: '/admin/settings', label: 'Settings', icon: FaCog },
  ];

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      // Redirect to login page will be handled by auth state change
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Gagal logout. Silakan coba lagi.');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-slate-100 font-bold hidden sm:block">
                Admin Panel
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center">
                <span className="text-white font-medium text-sm">AD</span>
              </div>
              <span className="text-slate-100 hidden sm:block">Admin</span>
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-800 border border-slate-700/50 shadow-lg py-1"
              >
                <button
                  onClick={() => {
                    handleLogout();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-700/50 flex items-center space-x-2"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-slate-700/50">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`p-2 rounded-lg flex flex-col items-center justify-center space-y-1 text-center transition-colors ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-700/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 