export default async function sitemap() {
  const baseUrl = 'https://jogasti.vercel.app';

  // Daftar halaman statis
  const staticPages = [
    '',
    '/layanan',
    '/testimoni',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticPages];
} 