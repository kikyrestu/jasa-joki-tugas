import { NextResponse } from 'next/server';

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 menit dalam milliseconds
const MAX_REQUESTS = 60; // maksimum 60 request per menit

// Simpan request count per IP (dalam production sebaiknya gunakan Redis)
const ipRequests = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const userRequests = ipRequests.get(ip) || { count: 0, timestamp: now };

  // Reset counter jika sudah lewat time window
  if (now - userRequests.timestamp > RATE_LIMIT_WINDOW) {
    userRequests.count = 0;
    userRequests.timestamp = now;
  }

  userRequests.count++;
  ipRequests.set(ip, userRequests);

  return userRequests.count > MAX_REQUESTS;
}

export function middleware(request) {
  // Get IP address dari request headers
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const pathname = request.nextUrl.pathname;

  // Izinkan akses ke halaman login admin
  if (pathname === '/admin/auth') {
    // Jika sudah login, redirect ke dashboard
    if (request.cookies.has('admin_session')) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
  }

  // Proteksi route admin lainnya
  if (pathname.startsWith('/admin')) {
    // Cek rate limiting hanya untuk attempts ke login dan actions
    if (pathname.includes('/auth') || pathname.includes('/api')) {
      if (isRateLimited(ip)) {
        return new NextResponse('Too Many Requests', {
          status: 429,
          headers: {
            'Retry-After': '60',
            'Content-Type': 'text/plain',
          },
        });
      }
    }

    // Redirect ke login jika belum ada session
    if (!request.cookies.has('admin_session')) {
      const loginUrl = new URL('/admin/auth', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Konfigurasi route mana saja yang akan diproteksi
export const config = {
  matcher: ['/admin/:path*']
}; 