import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-lg border-b border-amber-500/20 shadow-lg shadow-amber-500/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="relative group"
          >
            <span className="font-[var(--font-space)] text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">
              JogasTI
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link 
              href="/layanan" 
              className="relative group px-4 py-2"
            >
              <span className="relative z-10 font-[var(--font-poppins)] text-slate-300 group-hover:text-amber-400 transition-colors duration-300">
                Layanan
              </span>
              <span className="absolute inset-0 rounded-xl bg-slate-800/0 group-hover:bg-slate-800/50 transition-all duration-300"></span>
            </Link>
            <Link 
              href="/testimoni" 
              className="relative group px-4 py-2"
            >
              <span className="relative z-10 font-[var(--font-poppins)] text-slate-300 group-hover:text-amber-400 transition-colors duration-300">
                Testimoni
              </span>
              <span className="absolute inset-0 rounded-xl bg-slate-800/0 group-hover:bg-slate-800/50 transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 