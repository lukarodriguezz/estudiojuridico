/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Indica que queremos archivos estáticos (HTML/CSS/JS)
  images: {
    unoptimized: true, // GitHub Pages no soporta la optimización de imágenes de Next.js por defecto
  },
  // Descomenta la siguiente línea si tu repo NO es el principal (ej: /neuquen-legal/)
  // basePath: '/neuquen-legal', 
};

export default nextConfig;